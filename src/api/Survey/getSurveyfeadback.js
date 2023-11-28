const feedback= require('../../models/feedback')

const feedbackMessage  =async(req,res)=>{
    const info = req.body;
    const result = await feedback.findOne(info).exec();
    res.send(result);
}
module.exports= feedbackMessage;