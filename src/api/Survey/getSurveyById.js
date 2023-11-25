const survey = require('../../models/survey')

const surveyList = async(req,res) =>{
    const id = req.params.id;
    const result = await survey.findOne({_id:id}).exec();
    res.send(result)
}

module.exports= surveyList;