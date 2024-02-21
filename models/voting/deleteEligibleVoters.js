const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    const {empno}=req.params
    
    var sql=`SELECT * FROM eligible where empno='${empno}' and status=1`;
    con.query(sql,(err,result)=>{ 
        if(err) throw err
        if(result.length>0){
            var sql=`update eligible set status=0 where empno='${empno}'`
            con.query(sql,(err,result2)=>{
                if(err) throw err
                res.send({
                    error:false,
                    data:`Member ${result[0].name}(${empno}) has been disabled!`
                })
            })
        }   
        else{
            res.send({
                error:true,
                message:"Invalid empno!"
            })
        }    
        
        
    })
}   

