const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
var randomToken = require('random-token');
exports.run=(req,res,next) => {
    const {email,password}=req.body
    
    const pw=md5(password)
    var sql=`SELECT * FROM admin where email='${email}' AND password='${pw}'`;
    con.query(sql,(err,result)=>{
        if(result.length==0){
            res.send({
                error:true,
                message:"Unauthorized Credentials!"
            })
        }
        else{
            if(result[0].email==email && result[0].password==pw){
                var token = randomToken(128);
                var sql=`UPDATE admin set bearerToken='${token}' where email='${email}'`
                con.query(sql);
                delete result[0].password
                var payload=req.body || req.query
                var param=req.params
                payload.params=param
                con.query(`INSERT INTO audit (email,endpoint,payload) VALUES ('${email}', '${req.url}','${JSON.stringify(payload)}')`);
                res.send({
                    error:false,
                    token:token,
                    data:result[0]
                })
            }
            else{
                res.send({
                    error:true,
                    message:"Unauthorized Credentials!"
                })
            }
        }
    })
}   