const userfeedback = require('../../models/userfeedback')

const postuserfeedback = async(req,res) =>{
    const Info= req.body;
    //console.log(Info);
    const result = await userfeedback.create(Info);
    res.send(result)
}

module.exports= postuserfeedback;