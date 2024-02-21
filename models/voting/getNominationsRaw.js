const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
        
    const {orderby="timestamp",direction="desc"}=req.body
    var sql=`SELECT * FROM raw_nomination order by ${orderby} ${direction}`;
    con.query(sql,(err,result)=>{        
            res.send({
                error:true,
                data:result
            })
             
    })
}   

