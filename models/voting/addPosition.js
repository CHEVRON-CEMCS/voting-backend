const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    const {name}=req.body
    
    var sql=`SELECT * FROM position where name='${name}'`;
    con.query(sql,(err,result)=>{
        if(result.length>0){
            res.send({
                error:true,
                message:"This position already exists!"
            })
        }
        else{
            
            var sql=`INSERT INTO \`position\` (name) VALUES ('${name}')`;
            con.query(sql,(err,result)=>{
                if(err) throw err;
                res.send({
                    error:false,
                    "message":`Position ${name} added to the system!`
                })
            })
        }
    })
}   

