const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    if(req.query.empno){
        var {positionId,empno,nomineeno}=req.query
    }
    else{
        var {positionId,empno,nomineeno}=req.body
    }
    

    if(empno==nomineeno){
        res.send({
            error:true,
            empno:empno,
            nomineeno:nomineeno,
            body:req.body,
            params:req.params,
            query:req.query,
            message:`You cant nominate yourself!`
        })
    }
    else{
    
    var sql=`SELECT * FROM nominations where positionId='${positionId}' AND empno='${empno}'`;
    con.query(`SELECT * from position where id='${positionId}'`,(err,result)=>{
        if(result.length==0){
            res.send({
                error:true,
                message:"Invalid position selected!"
            })
        }
        else{
            con.query(`select * from eligible where empno='${nomineeno}' and empno not like '%r'`,(err,resultel)=>{
                if (resultel.length==0){
                    res.send({
                        error:true,
                        "message":"This candidate does not exist or cannot be nominated!"
                    })
                }
                else{                    
                    
            con.query(sql,(err,result)=>{ 
                if(err) throw err
                if(result.length>0){
                    // res.send({
                    //     error:true,
                    //     message:"You have nominated someone for this position already! "
                    // })

                    //check if the person has been nominated for another position by the same voter
                    var sql=`SELECT * FROM nominations where nomineeno='${nomineeno}' AND empno='${empno}'`
                    con.query(sql,(err,result)=>{
                        if(err) throw err
                        if(result.length>0 && result[0].positionId!=positionId){                            
                                res.send({
                                    error:true,
                                    message:"You have already nominated this person for a position!"
                                })
                            
                           
                        }
                        else{
                            var sql=`UPDATE nominations SET nomineeno='${nomineeno}' WHERE positionId='${positionId}' AND empno='${empno}'`
                            con.query(sql,(err,result)=>{
                                if(err) throw err;
                                res.send({
                                    error:false,
                                    message:"Your nomination has been updated!"
                                })
                            })
                        }
                    })
                }
                else{
                    var sql=`SELECT * FROM nominations where nomineeno='${nomineeno}' AND empno='${empno}'`
                    con.query(sql,(err,result)=>{
                        if(err) throw err
                        if(result.length>0){
                            res.send({
                                error:true,
                                message:"You have already nominated this person for a position!"
                            })
                        }
                        else{
                            var sql=`INSERT INTO nominations (positionId,empno,nomineeno) VALUES ('${positionId}','${empno}','${nomineeno}') `
                            con.query(sql,(err,result)=>{
                                if(err) throw err;
                                res.send({
                                    error:false,
                                    message:"Your nomination has been registered!"
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

