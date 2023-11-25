const user = require('../../models/user')

const getUserRole = async(req,res) =>{
    const {email}=req.query;
    //console.log(email);
    const result = await user.findOne({email});
    res.send(result)
}

module.exports= getUserRole;