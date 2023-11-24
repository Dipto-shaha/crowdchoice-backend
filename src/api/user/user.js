const user =require('../../models/user')

const userCreate = async(req,res) =>{
    const userInfo= req.body;
    console.log(userInfo,"Is it here");
    const query= {email:userInfo.email};
    const cursor = await user.findOne(query);
    if(!cursor)
    {
        const result = await user.create(userInfo);
        res.send(result)
    }
    else
    {
        console.log(cursor);
        res.send(cursor);
    }
     

}

module.exports= userCreate;