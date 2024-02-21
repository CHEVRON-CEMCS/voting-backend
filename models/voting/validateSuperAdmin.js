const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    const {adminemail,adminpassword}=req.body
    const email=adminemail
    const password=md5(adminpassword)
    var sql=`SELECT * FROM admin where email='${adminemail}' AND password='${password}'`;
    con.query(sql,(err,result)=>{
        if(result.length==0){
            res.send({
                error:true,
                message:"Unauthorized Credentials!"
            })
        }
        else{
            if(result[0].email==email && result[0].password==password && result[0].super){
                var payload=req.body || req.query
                var param=req.params
                payload.params=param
                con.query(`INSERT INTO audit (email,endpoint,payload) VALUES ('${email}', '${req.url}','${JSON.stringify(payload)}')`);
                next()
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