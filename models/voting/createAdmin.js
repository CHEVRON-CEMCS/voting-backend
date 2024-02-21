const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    const {email,password,name}=req.body;
    var sql=`INSERT INTO admin (email,password,name) VALUES ('${email}','${md5(password)}','${name}')`
    con.query(`SELECT * FROM admin where email='${email}' AND password='${md5(password)}'`,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({
                error:true,
                message:"This user already exists!"
            })
        }
        else{
            con.query(sql,(err,result)=>{
                if(err) throw err;
                res.send({
                    error:false,
                    message:"Admin Created Successfully"
                })
            })
        }
    })
    
    
}