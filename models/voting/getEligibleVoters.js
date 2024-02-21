const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {    
    
    var sql=`SELECT * FROM eligible where status=1`;
    con.query(sql,(err,result)=>{ 
        if(err) throw err
        if(result.length>0){
            res.send({
                error:false,
                data:result
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

