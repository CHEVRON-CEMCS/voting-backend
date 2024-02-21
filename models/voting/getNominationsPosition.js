const con = require('../../connection/index').connect_voting();
const md5 = require('md5');

exports.run = async (req, res, next) => {
    const {} = req.body;
    const nominations = [];

    const getCount = async (empno) => {
        return new Promise(async(resolve, reject) => {
           

            const name=await query(`SELECT * FROM eligible where empno='${empno}'`)
            var memnom = {
                empno: empno,
                name:name[0].name,
                nominated:0,
                nominatedPosition:0,
                accepted:0,
                counts: []
            };
            positionId=req.params.positionId
            con.query(`SELECT * FROM position where id='${req.params.positionId}'`, async (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
               

                for (const position of result) {
                    const countsql = `SELECT * FROM nominations WHERE positionId='${position.id}' AND nomineeno='${empno}'`;
                    const ress = await query(countsql);
                    const co=await query(`select * from eligible where empno='${empno}'`)
                    memnom.nominated=co[0].nominated;
                    if(co[0].accepted=="1"){
                        if(co[0].positionId==req.params.positionId){
                            // memnom.accepted=co[0].accepted
                            memnom.accepted="1"
                        }
                        else{
                            memnom.accepted="2"
                        }
                    }
                    else{
                        memnom.accepted=co[0].accepted
                    }
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
        const result = await query(`SELECT DISTINCT nomineeno FROM nominations where positionId='${req.params.positionId}'`);
        for (const member of result) {
            await getCount(member.nomineeno);
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
