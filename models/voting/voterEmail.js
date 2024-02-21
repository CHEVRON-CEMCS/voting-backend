const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
require('dotenv').config();
function sendMail(email,subject,cc,html,callback){
    const api = require('../../API/mailer.js');
    api.run({email,subject,cc,html}, (result) => {
        return callback(result);
    });
}

exports.run=(req,res,next) => {
    var code=generateCode(6)
    const {empno}=req.body
    con.query(`UPDATE eligible set code='${code}' where empno='${empno}'`)
    var sql=`SELECT * FROM eligible where empno='${empno}' and status=1`;
    con.query(sql,(err,result)=>{
            if(err) throw err;
            if(result.length==0){
                res.send({
                    error:true,
                    "message":"Invalid empno!"
                })
            }
            else{
                var email=result[0].email
                var code=result[0].code
                var htm=require('../../API/html')
                var html=`Good day cooperator <br/> <br/> 
                Kindly find your code  to use for the CEMCS voting platform: ${code}
                <br/><br/>
                Kindly click here to login
                `
                sendMail(email,'CEMCS VOTING PLATFORM',null,htm.get(html,process.env.VOTING_SITE,"Visit Voting Platform"),((re)=>{
                    res.send({
                         error:false,
                        message:"Code was sent Successfully!"
                    })
                }))
              
            }
             
    })
}   

function generateCode(len){
    var result=""
    for (var i=0;i<len;i++){
        result+=String(Math.floor(Math.random() * 10));
    }
    return result
}