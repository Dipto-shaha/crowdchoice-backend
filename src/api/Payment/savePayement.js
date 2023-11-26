const payment= require('../../models/payment')

const savepayment = async(req,res) =>{
    const info = req.body;
    console.log(info);
    const result = await payment.create(info);
    res.send(result)
}


module.exports= savepayment;