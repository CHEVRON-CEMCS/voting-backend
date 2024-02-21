const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    var sql=`SELECT * FROM stages where status=1`;
    con.query(sql,(err,result)=>{
            if(err) throw err;
            res.send({
                error:false,
                data:result[0]
            })
            
             
    })
}   

