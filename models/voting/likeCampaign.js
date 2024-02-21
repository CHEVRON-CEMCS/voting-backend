var query=require('./query').query

const md5 = require('md5');
require('dotenv').config();
exports.run=async (req,res,next) => {
    const {empno}=req.params
    
    var sql=`SELECT * from campaign where empno='${empno}'`;
    var campaignRes=await query(sql)
    
    if(campaignRes && campaignRes.length>0){
        await query(`Update campaign set likeCount='${parseInt(campaignRes[0].likeCount)+1}' where empno='${empno}'`)
        res.send({
            error:false,
            message:"Campaign liked!"
        })
    }
    else{
        res.send({
            error:true,
            empno:empno,
            message:"Campaign does not exist!"
        })
    }
}   

