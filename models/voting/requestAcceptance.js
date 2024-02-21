const con = require('../../connection/index').connect_voting();
const md5 = require('md5');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


//email function
async function sendMail(email,subject,cc,html,callback){
    const api = require('../../API/mailer.js');
    api.run({email,subject,cc,html}, (result) => {
        return callback(result);
    });
}

function positionCount(positionString){
    const positionsArray = positionString.split(',');

    // Count the occurrences of each position using an object
    const positionCount = {};
    positionsArray.forEach(position => {
        positionCount[position] = (positionCount[position] || 0) + 1;
    });
    
    // Convert the object to an array of HTML strings with serial number and position count
    let serialNumber = 1;
    const resultHTMLArray = Object.entries(positionCount).map(([position, count]) => {
        return `<tr style="border: 1px solid #ddd;">
        <td style="border: 1px solid #ddd; padding: 8px;">${serialNumber++}</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${position}</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${count}</td>
    </tr>`;
    });
    
    // Join the HTML strings
    const resultHTML = resultHTMLArray.join('');
    return resultHTML;
}

exports.run=async (req,res,next) => {  
    
    // const emailCandidate = async(email,position,name)=>{                      
    //     var htm=require('../../API/html')
    //     var html=`Good day ${name} <br/> <br/> 
    //    You have been nominated for the position of ${position}
    //     <br/><br/>
    //     Kindly login to either accept or decline this offer
    //     `
    //     con.query(`INSERT INTO communication (subject,communication,email) VALUES 
    //     ('CEMCS VOTING PLATFORM - Nomination Acceptance','${html}','${email}')`);
    //     sendMail(email,'CEMCS VOTING PLATFORM - Nomination Acceptance',null,htm.get(html,process.env.VOTING_SITE,"Visit Voting Platform"),((re)=>{            
    //         return 1
    //     }))
    // }

    const emailCandidate = async(empno,email,position,name)=>{    
        con.query(`update eligible set nominated=1 where empno='${empno}'`);                  
        var htm=require('../../API/html')
        var html=`Good day ${name} <br/> <br/> 
       You have been nominated for the following position(s) in the ongoing CEMCS executive election:
       <br/><br/>
       <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
                        <thead style="background-color: #f2f2f2; border: 1px solid #ddd; padding: 8px;">
                            <th style="border: 1px solid #ddd; padding: 8px;">S/N</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">Positions</th>
                            <th style="border: 1px solid #ddd; padding: 8px;">No. of Nominations</th>
                        </thead>
                        <tbody>${positionCount(position)}</tbody>
                    </table>
      
        <br/><br/>
        Kindly login to the election application to either accept or decline your nomination(s).
        <br/><br/>
        Note: Only ONE nomination can be accepted

        <br/><br/>
        <b>Kindly ignore if you have already taken action</b>
        `
        con.query(`INSERT INTO communication (subject,communication,email) VALUES 
        ('CEMCS VOTING PLATFORM - Nomination Acceptance','${html}','${email}')`);
        // await sendMail(email,'CEMCS VOTING PLATFORM - Nomination Acceptance','chiomaokafor@chevron.com;tunde.oyedele@chevron.com;tagiaye@chevron.com;michael.bassey@chevron.com;cizumunna@chevron.com;damola.ogungbe@chevron.com;omoruyio@chevron.com;',htm.get(html,process.env.VOTING_SITE,"Visit Voting Platform"),((re)=>{            
        //      return 1
        //  }))
         await sendMail(email,'CEMCS VOTING PLATFORM - Nomination Acceptance','chiomaokafor@chevron.com;',htm.get(html,process.env.VOTING_SITE,"Visit Voting Platform"),((re)=>{            
            return 1
        }))
        await delay(1000);
        // console.log(html)
    }
    
    // var sql=`SELECT e.email, e.name, p.name AS position FROM eligible AS e LEFT JOIN position AS p ON e.positionId=p.id where e.status=1 and e.nominated=1 and e.accepted=0`;
    var sql=`
    SELECT * from cleanNominate where accepted=0;

    `
    con.query(sql,async (err,result)=>{ 
        if(err) throw err
        if(result.length>0){
            for (i=0;i<result.length;i++){
                // await emailCandidate(result[i].email,result[i].position,result[i].name)
                await emailCandidate(result[i].nomineeno,result[i].email,result[i].positionNamesAll,result[i].name)
            }

            res.send({
                error:false,
                data:result
            })
        }   
        else{
            res.send({
                error:true,
                message:"Looks like there is no pending acceptance!"
            })
        }    
        
        
    })
}   

