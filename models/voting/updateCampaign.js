const con = require('../../connection/index').connect_voting();
const md5 = require('md5');
exports.run = (req, res, next) => {
    const {
        empno
    } = req.body
    message = req.body.message.replace(/'/g, "\\'"); 
    con.query(`SELECT * FROM campaign where empno='${empno}' `, (err, result) => {
        if (err) throw err
        if (result.length == 0) {
            res.send({
                error: false,
                message: "You have not set your campaign message!"
            })
        } else {


            sql = `UPDATE campaign  SET message='${message}' where empno='${empno}'`
            con.query(sql, (err, result1) => {
                if (err) throw err;
                res.send({
                    error: false,
                    message: `You have updated your campaign message`
                })
            })
        }
    })
}