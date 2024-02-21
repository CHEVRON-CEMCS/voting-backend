const con = require('../../connection/index').connect_voting();
const md5 = require('md5');

exports.run = async (req, res, next) => {
    const {empno} = req.params;
    sql=`SELECT v.empno,v.nomineeno,e.name AS nominatedName,v.positionId,p.name,v.positionId,v.dateCreated from nominations AS v LEFT JOIN position AS p ON v.positionId=p.id LEFT JOIN eligible AS e ON v.nomineeno=e.empno WHERE v.empno='${empno}' ORDER BY v.positionId ASC`;
    con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({
            error:false,
            data:result
        })
    })
};
