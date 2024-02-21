const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    const {email,password,newpassword}=req.body
    
    const pw=md5(newpassword)
    var sql=`UPDATE admin set password='${pw}' where email='${email}' AND password='${md5(password)}'`;
    con.query(sql,(err,result)=>{
        if(err) throw err;
        
        res.send({
            error:false,
            message:`Admin Credentials for '${email}' has been updated!`
        })
    })
}   