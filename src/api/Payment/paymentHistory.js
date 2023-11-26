const payment= require('../../models/payment');
const getPaymentList = async (req,res) =>{
    const result = await payment.find();
    res.send({result})
}
module.exports= getPaymentList;