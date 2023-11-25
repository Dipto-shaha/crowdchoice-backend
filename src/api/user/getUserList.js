const user = require('../../models/user')

const getUserList = async(req,res) =>{
    const result = await user.find();
    res.send({result})
}

module.exports= getUserList;