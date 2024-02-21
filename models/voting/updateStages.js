const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    const {id}=req.body
    var sql=`SELECT * FROM stages where id='${id}'`;
    con.query(sql,(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                con.query(`update stages set status=0`);
                con.query(`update stages set status=1 where id='${id}'`);
                res.send({
                    error:false,
                    message:`Current Stage updated to ${result[0].name}`
                })
            }
            else{
                res.send({
                    error:true,
                    message:"Invalid id"
                })
            }
            
            
             
    })
}   

