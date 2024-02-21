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
    
    const {empno}=req.body
    con.query(`UPDATE eligible set accepted='2' where empno='${empno}'`)
    var sql=`SELECT e.name,e.email,p.name AS position FROM eligible AS e left join position as p on e.positionId=p.id where empno='${empno}' and e.status=1`;
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
                var htm=require('../../API/html')
                var html=`Good day cooperator <br/> <br/> 
                This is to notify you that you have declined all nominations
                <br/><br/>
                `
                sendMail(email,'CEMCS VOTING PLATFORM',null,htm.get(html,process.env.VOTING_SITE,"Visit Voting Platform"),((re)=>{
                    res.send({
                         error:false,
                        message:"Nomination Accepted!"
                    })
                }))
              
            }
             
    })
}   


