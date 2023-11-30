const userfeedback = require('../../models/userfeedback')

const getuserfeedback = async(req,res) =>{
    const id = req.params.id;
    //console.log(id);
    const result = await userfeedback.findOne({SurveyId:id}).exec();
   // console.log(result)
    res.send(result)
}
module.exports= getuserfeedback;