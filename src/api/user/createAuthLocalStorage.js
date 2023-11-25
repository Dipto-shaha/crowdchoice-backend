const jwt = require('jsonwebtoken')

const createAuthCookie=(req,res,next)=>{
    try{
        const user = req.body;
        const tokenCode = process.env.ACCESS_TOKEN_SECRET;
        // const token = process.env.ACCESS_TOKEN_SECRET;
        // res.cookie('token', token, {
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: 'none'
        // })
        // .send({ success: true });
        const token = jwt.sign(user,tokenCode,{expiresIn:'1h'})
        res.send({token});
    }   
    catch(err) {
        next(err)
    }
}

module.exports = createAuthCookie