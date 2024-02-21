const con = require('../../connection/index').connect_voting();
const md5 = require('md5');

exports.run = async (req, res, next) => {
    const {positionId} = req.params;
    const nominations = [];

    const getCount = async (empno) => {
        // console.log(empno)
        return new Promise((resolve, reject) => {
            var memnom = {
                empno: empno,
                nominated:0,
                nominatedPosition:0,
                counts: []
            };

            con.query(`SELECT * FROM position where id='${positionId}'`, async (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }

                for (const position of result) {
                    const countsql = `SELECT * FROM votes WHERE positionId='${position.id}' AND votedno='${empno}'`;
                    const ress = await query(countsql);
                    const co=await query(`select * from eligible where empno='${empno}'`)
                    // console.log(empno)
                    memnom.nominated=co[0].nominated;
                    memnom.nominatedPosition=co[0].positionId
                    const curr = {
                        positionName: position.name,
                        positionId: position.id,
                        count: ress.length,
                    };

                    memnom["counts"].push(curr);
                }

                nominations.push(memnom);
                resolve(memnom);
            });
        });
    };

    const query = async (sql) => {
        return new Promise((resolve, reject) => {
            con.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    };

    try {
        const result = await query(`SELECT DISTINCT votedno FROM votes where positionId='${positionId}'`);

        for (const member of result) {
            await getCount(member.votedno);
        }

        res.send({
            error: false,
            data: nominations
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            error: true,
            message: 'Internal Server Error'
        });
    }
};
