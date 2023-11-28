const survey = require('../../models/survey')

const surveyList = async(req,res) =>{
    const query= req.query.publish_status;
    //console.log(query);
    if(query) 
    { 
        const result = await survey.find({publish_status:true}).exec();
        res.send(result)
    }
    else
    {
        const result = await survey.find().exec();
        res.send(result)
    }
}

module.exports= surveyList;