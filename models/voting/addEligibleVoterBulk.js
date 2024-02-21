const con = require('../../connection/index').connect_voting();
const md5 = require('md5');

exports.run=async (req,res,next) => {
    var exists=[]
    var done=[]
    var count=0
    var addEligibleVoter=(empno,eligibleEmail,name)=>{
        var code=generateCode(6)
        var sql=`SELECT * FROM eligible where empno='${empno}' and status=1`;
        return new Promise(resolve => {
            con.query(sql,(err,result)=>{
                if(err) throw err;
                if(result.length>0){
                  exists.push(empno);
                  resolve(false)
                }
                else{
                    
                    var sql=`INSERT INTO eligible (empno,email,name,code) VALUES ('${empno}','${eligibleEmail}','${name}','${code}')`;
                    con.query(sql,(err,result)=>{
                        if(err) throw err;
                        count++
                        done.push(empno);
                        resolve(true)
                        
                    })
                }
            })
        });      
        
        con.query(sql,(err,result)=>{
            
        })
    }

    const {data}=req.body

    for (i=0;i<data.length;i++){
        var d=data[i]
        await addEligibleVoter(d.empno,d.eligibleEmail,d.name);
    }
    if(exists.length>0){
        res.send({
            error:false,
            message:`Added ${count} voters! ${String(done)}.Could not add ${exists.length} voters! ${String(exists)}`
        })    
    }
    else{
        res.send({
            error:false,
            message:`Added ${count} voters! ${String(done)}`
        })   
    }
    
    
}   

function generateCode(len){
    var result=""
    for (var i=0;i<len;i++){
        result+=String(Math.floor(Math.random() * 10));
    }
    return result
}