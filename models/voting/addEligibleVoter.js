const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    const {empno,name,eligibleEmail,}=req.body
    
    var sql=`SELECT * FROM eligible where empno='${empno}' and status=1`;
    con.query(sql,(err,result)=>{
        if(result.length>0){
            res.send({
                error:true,
                message:"This voter already exists!"
            })
        }
        else{
            var code=generateCode(6)
            var sql=`INSERT INTO eligible (empno,email,name,code) VALUES ('${empno}','${eligibleEmail}','${name}','${code}')`;
            con.query(sql,(err,result)=>{
                if(err) throw err;
                res.send({
                    error:false,
                    "message":`Eligible voter ${name}(${empno}) added to system`
                })
            })
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