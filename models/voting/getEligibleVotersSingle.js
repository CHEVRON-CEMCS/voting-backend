const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    const {empno}=req.params
    
    var sql=`SELECT * FROM eligible where empno='${empno}' and status=1`;
    con.query(sql,(err,result)=>{ 
        if(err) throw err
        if(result.length>0){
            res.send({
                error:false,
                data:result[0]
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

