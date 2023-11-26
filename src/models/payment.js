const { model, Schema } = require("mongoose");

const PaymentSchema = new Schema({

    "name":{
        type:String ,
        required: true
    },
    "email":{
        type:String ,
        required: true
    },
    "price":{
        type:Number,
        required:true,

    },
    "transactionId":{
        type:String ,
        required: true
    },
    "paymentDate":{
        type:String,
        required:true
    }
})


const Payment = model("payment",PaymentSchema)

module.exports = Payment