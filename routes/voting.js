var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
//const md5 = require('md5');
//const con = require('../connection/index').connect();
//const mail=require('../controllers/mail');

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json({
    extended: true
}));
router.use(bodyParser.text({
    extended: true
}));

// package to upload image 
const multer = require('multer');
const { info } = require('console');
const { extname } = require('path');

const fspath = require('path');

const fs = require('fs');
const global = require('../global');


router.get("/",(req,res)=>{
    res.send({
        error:false,
        message:"Router working!"
    })
})

//controller for creating admin
router.post("/createAdmin",require('../models/voting/validateSuperAdmin').run,require('../models/voting/createAdmin').run)

//change admin password
router.patch("/changePassword",require('../models/voting/validateAdmin').run,require('../models/voting/changePassword').run)

//admin login
router.post("/adminLogin",require('../models/voting/adminLogin').run)

//add eligible voter
router.post("/eligible",require("../models/voting/validateAdmin").run,require('../models/voting/addEligibleVoter').run);
//add eligible voter bulk
router.post("/eligible/bulk",require("../models/voting/validateAdmin").run,require('../models/voting/addEligibleVoterBulk').run);
//get eligible voters
router.get("/eligible",require("../models/voting/validateAdmin").run,require('../models/voting/getEligibleVoters').run)
//get eligible voters single
router.get("/eligible/:empno",require("../models/voting/validateAdmin").run,require('../models/voting/getEligibleVotersSingle').run)
//delete eligible voters single
router.delete("/eligible/:empno",require("../models/voting/validateAdmin").run,require('../models/voting/deleteEligibleVoters').run)

//positions
router.post("/position",require('../models/voting/validateAdmin').run,require("../models/voting/addPosition").run)
router.delete("/position",require('../models/voting/validateAdmin').run,require("../models/voting/deletePosition").run)
router.get("/position",require('../models/voting/getPositions').run);


//voter email, send code to voter to use to login
router.post("/voter/email",require('../models/voting/voterEmail').run);

//voter login
router.post("/voter",require('../models/voting/voterLogin').run);

//stage
// get stages
router.get("/stage",require('../models/voting/validateAdmin').run,require("../models/voting/getStages").run)
//get current stage
router.get("/stage/current",require("../models/voting/getCurrentStage").run)
//update current stage
router.patch("/stage/current",require('../models/voting/validateAdmin').run,require("../models/voting/updateStages").run)

//communication
router.post("/communication",require("../models/voting/validateAdmin").run,require("../models/voting/newCommunication").run);


//communication
router.post("/help",require("../models/voting/newCommunication").run);


//search person
router.get("/member/:query",require("../models/voting/searchMember").run);

//search person per position
router.get("/member/:query/:position",require("../models/voting/searchMember").run);

//voter nomination
router.get("/nominate",require("../models/voting/validateVoter").run,require("../models/voting/nominate").run);

//get nominations
router.get("/nominations",require('../models/voting/validateAdmin').run,require("../models/voting/getNominations").run)

//get nominations by position
router.get("/nominations/position/:positionId",require('../models/voting/validateAdmin').run,require("../models/voting/getNominationsPosition").run)

//get nominations by position
router.get("/nominations/raw",require('../models/voting/validateAdmin').run,require("../models/voting/getNominationsRaw").run)


//get user nomination
router.get("/nominations/:nomineeno",require('../models/voting/validateAdmin').run,require("../models/voting/getNominationSingle").run)

//set nominated, this sets the candidate nominated status to true so they can respond
router.post("/setnominated",require('../models/voting/validateAdmin').run,require("../models/voting/setNominated").run)

//request acceptance, this will request acceptance from people that have been set nominated but have not responded.
router.post("/requestacceptance",require('../models/voting/validateAdmin').run,require("../models/voting/requestAcceptance").run)

//accept request 
router.post("/acceptrequest",require('../models/voting/validateCampaignUser').run,require("../models/voting/acceptRequest").run)


//decline request
router.post("/declinerequest",require('../models/voting/validateCampaignUser').run,require("../models/voting/declineRequest").run)

//Setting up storage for storing files in the voting folder
const campaignStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        const path = global.dir + "/public/voting";
        cb(null, path)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        //cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname.slice(_.lastIndexOf(file.originalname,"."),file.originalname.length))
        cb(null, 'image-thumbnail-' + file.originalname.replace(/ /g,'') + '-' + uniqueSuffix + fspath.extname(file.originalname));
    }
})
const campaignImage = multer({
    storage: campaignStorage
})

//set campaign
router.post("/campaign",campaignImage.single('image'),require('../models/voting/validateCampaignUser').run,require("../models/voting/setCampaign").run)

// Get campaign picture
router.get("/image/:name", (req, res) => {
    res.sendFile(global.dir + "/public/voting/" + req.params.name);
})

router.patch("/campaign/message",require('../models/voting/validateCampaignUser').run,require("../models/voting/updateCampaign").run)

//get campaign
router.get("/campaign",require("../models/voting/getCampaign").run)

//get single campaign
router.get("/campaign/:empno",require("../models/voting/getCampaignSingle").run)

//like campaign
router.get("/campaign/:empno/like",require("../models/voting/validateVoter").run,require("../models/voting/likeCampaign").run)


//get voting candidates
router.get("/getVoteCandidates",require("../models/voting/validateVoter").run,require("../models/voting/searchCandidate").run);


//get voted candidates
router.get("/getVoteCandidates/:empno",require("../models/voting/validateVoter").run,require("../models/voting/getVotedCandidates").run);

//get voted candidates
router.get("/getNominateCandidate/:empno",require("../models/voting/validateVoter").run,require("../models/voting/getNominatedCandidates").run);



//vote candidate
router.post("/vote",require("../models/voting/validateVoter").run,require("../models/voting/vote").run);

//get votes
router.get("/votes",require('../models/voting/validateAdmin').run,require("../models/voting/getVotes").run)

//get by position
//get votes
router.get("/votes/:positionId",require('../models/voting/validateAdmin').run,require("../models/voting/getVotesByPosition").run)

//get raw vote data
router.get("/votes/raw",require('../models/voting/validateAdmin').run,require("../models/voting/getVotesRaw").run)


//get votes single
router.get("/votes/:votedno",require('../models/voting/validateAdmin').run,require("../models/voting/getVotesSingle").run)


module.exports=router