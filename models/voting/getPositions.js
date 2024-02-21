const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    
    var sql=`SELECT * FROM position where status=1`;
    con.query(sql,(err,result)=>{
            res.send({
                error:true,
                data:result
            })
             
    })
}   

