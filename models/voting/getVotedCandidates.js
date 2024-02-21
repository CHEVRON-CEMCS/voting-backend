const con = require('../../connection/index').connect_voting();
const md5 = require('md5');

exports.run = async (req, res, next) => {
    const {empno} = req.params;
    sql=`SELECT v.empno,v.votedno,e.name AS votedName,v.positionId,p.name,v.positionId,v.dateCreated from votes AS v LEFT JOIN position AS p ON v.positionId=p.id LEFT JOIN eligible AS e ON v.votedno=e.empno WHERE v.empno='${empno}'`
    con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({
            error:false,
            data:result
        })
    })
};
