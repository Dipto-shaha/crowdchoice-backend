const user = require('../../models/user')

const updateRole = async(req,res) =>{
    const {email,role}= req.body;
    //console.log(_id,role)
    const result = await user.findOneAndUpdate(
        {email:email},
        { $set: { role: role } },{ new: true }
    );
    console.log("I am here",result)
    res.send({result})
}

module.exports= updateRole;