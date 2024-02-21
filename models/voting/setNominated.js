const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    const {empno,positionId}=req.body
    
    var sql=`SELECT * FROM eligible where empno='${empno}' and status=1`;
    con.query(sql,(err,result1)=>{ 
        if(err) throw err
        if(result1.length>0){
            con.query(`update eligible set nominated=1, positionId='${positionId}' where empno='${empno}'`,(err,result)=>{
                if(err) throw err;
                res.send({
                    error:false,              
                    message:`You have set ${result1[0].name}( ${empno} ) as a noiminated candidate!`
                })    
            })
        }
        else{
            res.send({
                error:true,              
                message:`This user is either disabled or does not exist!`
            })  
        }                     
        
    })
}   

