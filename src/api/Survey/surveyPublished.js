const survey = require('../../models/survey')

const publishedServey = async(req,res) =>{
    const {_id }= req.body;
    const updateSurveyInfo ={publish_status:true};
    const result = await survey.findOneAndUpdate({_id},updateSurveyInfo);
    console.log("Updated result",result);
    res.send(result)
}

module.exports= publishedServey;