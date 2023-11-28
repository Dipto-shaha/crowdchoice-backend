const survey = require('../../models/survey')

const updateByServeyor = async(req,res) =>{
    const {_id, surveyUpdate }= req.body;
    console.log("i am Here ",surveyUpdate);
    const result = await survey.findOneAndUpdate({_id},surveyUpdate);
    console.log("Updated result",result);
    res.send(result)
}


module.exports = updateByServeyor;
