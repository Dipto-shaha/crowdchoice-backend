const survey = require('../../models/survey')

const surverCreate = async(req,res) =>{
    const surveyInfo= req.body;
    console.log(surveyInfo);
    const updateSurveyInfo ={...surveyInfo,like:0 , dislike:0,publish_status:true,voteYes:0,voteNo:0};
    const result = await survey.create(updateSurveyInfo);
    res.send(result)
}

module.exports= surverCreate;