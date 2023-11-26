require('dotenv').config();
const stripe = require("stripe")(process.env.PAYMENT_KEY);

const payment = async(req,res) =>{
    const {price} = req.body;
    const  priceTotal= parseFloat(price)*100;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: priceTotal,
        currency: "usd",
        payment_method_types:['card']
      });
    res.send({
        clientSecret:paymentIntent.client_secret
    })
}

module.exports= payment;