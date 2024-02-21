const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    var {positionId,empno,votedno}= req.body

    if(empno==votedno){
        res.send({
            error:true,
            empno:empno,
            body:req.body,
            params:req.params,
            query:req.query,
            message:`You cant vote yourself!`
        })
    }
    else{
    
    var sql=`SELECT * FROM votes where positionId='${positionId}' AND empno='${empno}'`;
    con.query(`SELECT * from position where id='${positionId}'`,(err,result)=>{
        if(result.length==0){
            res.send({
                error:true,
                message:"Invalid position selected!",
                query:req.query,
                positionId:positionId,
                body:req.body
            })
        }
        else{
            con.query(`select * from eligible where empno='${votedno}'`,(err,resultel)=>{
                if (resultel.length==0){
                    res.send({
                        error:true,
                        "message":"This candidate cannot be voted for!"
                    })
                }
                else{

                
            con.query(sql,(err,result)=>{ 
                if(err) throw err
                if(result.length>0){
                    res.send({
                        error:true,
                        message:"You have voted someone for this position already! "
                    })
                }
                else{
                    var sql=`SELECT * FROM votes where votedno='${votedno}' AND empno='${empno}'`
                    con.query(sql,(err,result)=>{
                        if(err) throw err
                        if(result.length>0){
                            res.send({
                                error:true,
                                message:"You have already voted this person for a position!"
                            })
                        }
                        else{
                            var sql=`INSERT INTO votes (positionId,empno,votedno) VALUES ('${positionId}','${empno}','${votedno}') `
                            con.query(sql,(err,result)=>{
                                if(err) throw err;
                                res.send({
                                    error:false,
                                    message:"Your vote has been registered!"
                                })
                            })
                        }
                        
                    })
                    
            
                }
                
                
            })
        }
    })
        }
    })
    }   
 
}   

