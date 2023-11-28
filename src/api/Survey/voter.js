const voterList = require('../../models/vote')

const getVoter = async(req,res)=>{
    const SurveyId =req.query.SurveyId;
    const voterEmail =req.query.voterEmail;
    console.log("Hello:",SurveyId,voterEmail)
    const result = await voterList.findOne({SurveyId,voterEmail}).exec();
    console.log(result);
    res.send(result);
}
const addVoter = async(req,res) =>{
    const result = await voterList.create(req.body);
    console.log("Voter Added",result);
    res.send(result);
}


module.exports = {addVoter,getVoter};
