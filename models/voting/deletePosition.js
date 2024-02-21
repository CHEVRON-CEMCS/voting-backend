const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    const {name}=req.body
    
    var sql=`SELECT * FROM position where name='${name}'`;
    con.query(sql,(err,result)=>{
        if(result.length>0){
            var sql=`DELETE FROM position where name='${name}'`;
            con.query(sql,(err,result2)=>{
                if (err) throw err;
                res.send({
                    erorr:false,
                    message:`Position ${name} removed from system!`
                })
            })
        }
        else{
            res.send({
                error:true,
                message:"Position does not exist!"
            })
        }
    })
}   

