const user = require('../../models/user')

const userCreate = async(req,res) =>{
    const userInfo= req.body;
    console.log(userInfo);
    const query= {email:userInfo.email};
    const cursor = await user.findOne(query);
    if(!cursor) 
    {
        const userInfoWithRole ={...userInfo, role:'user'};
        const result = await user.create(userInfoWithRole);
        res.send(result)
    }
    else
    {
        console.log(cursor);
        res.send(cursor); 
    }
}

module.exports= userCreate;