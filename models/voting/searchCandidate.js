const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    
    
    var sql=`SELECT e.empno,e.name,e.email,e.nominated,e.positionId,p.name AS position_name,e.voted FROM eligible AS e LEFT JOIN position AS p ON e.positionId=p.id where e.status=1 and nominated=1 and empno NOT LIKE '%r'`;
    con.query(sql,(err,result1)=>{ 
        if(err) throw err
        con.query(`SELECT * FROM stages where status=1`,(err,result)=>{
            if(err) throw err;
            res.send({
                error:false,
                stageId:result[0].id,
                currentStage:result[0].name,
                data:result1
            })    
        })
        
        
        
    })
}   

