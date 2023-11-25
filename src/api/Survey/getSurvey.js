const survey = require('../../models/survey')

const surveyList = async(req,res) =>{
    const result = await survey.find().exec();
    res.send(result)
}

module.exports= surveyList;