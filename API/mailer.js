var nodemailer = require('nodemailer');
require('dotenv').config();

exports.run=(data,callback)=>{
    const {email,subject,cc=null,html}=data
    var transporter = nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }      
      });
      if(cc==null){
        var mailOptions = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: subject,
          html: html
        };
      }
      else{
        var mailOptions = {
          from: process.env.EMAIL_FROM,
          to: email,
          cc:cc,
          subject: subject,
          html: html
        };
      }
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(`Error sending email to ${email}:`,error);
          if(error) throw error;
          return callback({
            error:true,
            message:error
          })
        } else {
        //   console.log('Email sent: ' + info.response);
            return callback({
                error:false,
                message:info.response
            })
        }
      });
}