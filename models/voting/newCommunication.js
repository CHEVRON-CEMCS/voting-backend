const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
require('dotenv').config();
var htm=require('../../API/html')
function sendMail(email,subject,cc,html,callback){
    const api = require('../../API/mailer.js');
    api.run({email,subject,cc,html}, (result) => {
        return callback(result);
    });
}


exports.run=async (req,res,next) => {


    const {email,subject,body}=req.body



    var sql=`INSERT INTO communication (subject,communication,email) VALUES ('${subject}','${body}','${email}')`;
    con.query(sql,(err,result)=>{
            if(err) throw err;
            
            sendMail('l9lek325-smb@chevron.com',subject,'cemcsit@chevron.com',htm.get(body,process.env.VOTING_SITE,"Visit Voting Platform"),((re)=>{                
                res.send({
                    "error":false,
                    "message":"Email has been sent, we will get to you shortly"
                })
            })) 
           
           
          })
             
  
}   

