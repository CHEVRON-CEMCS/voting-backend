const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    const {empno,code}=req.body
    var sql=`SELECT * FROM eligible where empno='${empno}' AND code='${code}' and status=1`;
    con.query(sql,(err,result1)=>{
            if(err) throw err;
            if(result1.length==0){
                res.send({
                    error:true,
                    "message":"Invalid code!"
                })
            }
            else{
                con.query(`SELECT * FROM stages where status=1`,(err,result)=>{
                    con.query(`SELECT * from cleanNominate where nomineeno='${empno}'`,(err,resultt)=>{
                        if(err) console.log(empno,err);
                        if(resultt.length>0){
                            res.send({
                                error:false,
                                empno:empno,
                                stageId:result[0].id,
                                currentStage:result[0].name,
                                code:code,
                                positionId:resultt[0].nominations_list_id.split(','),
                                positionName:resultt[0].positionNames.split(','),
                                data:result1,                            
                                message:"Authentication Successful!"
                            })
                        }
                        else{
                            res.send({
                                error:false,
                                empno:empno,
                                stageId:result[0].id,
                                currentStage:result[0].name,
                                code:code,
                                positionId:[],
                                positionName:[],
                                data:result1,                            
                                message:"Authentication Successful!"
                            })
                        }                        
                    })
                   
                })
                
            }
             
    })
}   

