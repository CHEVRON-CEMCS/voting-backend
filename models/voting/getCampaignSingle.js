const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
require('dotenv').config();
exports.run=(req,res,next) => {
    const {empno}=req.params
    
    var sql=`SELECT c.empno,e.name,e.nominated,e.positionId, p.name AS position_name, c.image, c.message  FROM campaign AS c LEFT JOIN eligible AS e ON c.empno=e.empno LEFT JOIN position AS p ON e.positionId=p.id where c.empno='${empno}'`;
    con.query(sql,(err,result1)=>{ 
        if(err) throw err
        con.query(`SELECT * FROM stages where status=1`,(err,result)=>{
            if(err) throw err;
            for(i=0;i<result1.length;i++){
        
                result1[i].image=process.env.URL+"voting/image/"+result1[i].image
           }
            res.send({
                error:false,
                stageId:result[0].id,
                currentStage:result[0].name,
                data:result1
            })    
        })
        
        
        
    })
}   

