const survey = require('../../models/survey')
const feedback= require('../../models/feedback')

const updateServey = async(req,res) =>{
    const {_id, feedbackMessage, email }= req.body;
    console.log("Servey Staus Update",_id,feedbackMessage);
    const updateSurveyInfo ={publish_status:false};
    const feedbackServey ={SurveyId:_id,message:feedbackMessage, surveyorEmail:email}
    const resultOf = await feedback.create(feedbackServey);
    console.log(resultOf);
    const result = await survey.findOneAndUpdate({_id},updateSurveyInfo);
    console.log("Updated result",result);
    res.send(result)
}

module.exports= updateServey;