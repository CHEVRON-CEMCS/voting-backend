const con = require('../../connection/index').connect_voting();
const md5 = require('md5');


exports.run=(req,res,next) => {
    // const api = require('./API/updateLogo');
    // Object.keys(req.body).length==0?req.query.logo=req.file.filename:req.body.logo=req.file.filename;
    
    const {empno}=req.body    
    message = req.body.message.replace(/'/g, "\\'"); 
    filename=req.file.filename
    
    var sql=`SELECT * FROM eligible where empno='${empno}' and status=1 and nominated=1`;
    con.query(sql,(err,result1)=>{ 
        if(err) throw err
        if(result1.length>0){
            con.query(`SELECT * FROM campaign where empno='${empno}' `,(err,result)=>{
                if(err) throw err
                if(result.length>0){
                    res.send({
                        error:false,
                        message:"You have already set your campaign message!"
                    })
                }
                else{

              
            sql=`INSERT INTO campaign (empno,image,message) VALUES ('${empno}','${filename}','${message}')`
            con.query(sql,(err,result)=>{
                if(err) throw err;
                res.send({
                    error:false,              
                    message:`You have set your campaign message`
                })    
            })

        }
    })
        }
        else{
            res.send({
                error:true,              
                message:`This user is either disabled or does not exist!`
            })  
        }                     
        
    })
}   

