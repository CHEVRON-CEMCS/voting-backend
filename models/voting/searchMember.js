const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run=(req,res,next) => {
    query=req.params.query
    position=req.params.position

    if(position){ 
        var sql= `SELECT * from position where id=${position}` 
        con.query(sql,(err,re)=>{
            console.log(sql)
            if(err) throw err;
            console.log(re)
            var sql=`SELECT * FROM eligible where (empno LIKE '%${query}%' OR name LIKE '%${query}%' OR email LIKE '%${query}%') and ${re[0].column_name}=1 and status=1 and canLogin=1 and empno NOT LIKE '%r'`;
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
        })          
    }
    else{
        var sql=`SELECT * FROM eligible where (empno LIKE '%${query}%' OR name LIKE '%${query}%' OR email LIKE '%${query}%') and status=1 and canLogin=1 and empno NOT LIKE '%r'`;
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
    // console.group(sql);
    
}   

