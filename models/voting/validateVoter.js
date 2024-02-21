const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
var randomToken = require('random-token');

exports.run=(req,res,next) => {
    empno=req.body.empno
    if(!empno){empno=req.query.empno || req.params.empno }

    // email2=req.params.email;
    // email3=req.query.email;
    // email4=req.body.email;

    //get jwt token from the header   
     const bearerHeader=req.headers['authorization'];
     if(typeof bearerHeader !== 'undefined'){
    //split the jwt token since it comes in from 'Bearer token'. split to get jus token
    const bearer = bearerHeader.split(' ');
    //so now you have bearer=['Bearer', 'token'] lets get token
    const bearerToken=bearer[1];

    var sql=`SELECT * FROM eligible where empno='${empno}' AND code='${bearerToken}' and status=1`;
    con.query(sql,(err,result)=>{
            if(err) throw err;
            if(result.length==0){
                res.send({
                    error:true,
                    empno:empno,      
                    bearer:bearerToken,
                    sql:sql,
                    databody:req.body,
                    dataquery:req.query,
                    dataparams:req.params,      
                    
                    "message":"Invalid token!"
                })
            }
            else{
                var payload=req.body || req.query
                var param=req.params
                payload.params=param                
                con.query(`INSERT INTO audit (email,endpoint,payload) VALUES ('${empno}', '${req.url}','${JSON.stringify(payload)}')`);
               next()
            }
             
    })
} 
else{
    res.send({
        error:true,
        "message":"Bearer token not found!"
    })
}


}