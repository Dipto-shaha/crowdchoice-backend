const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    
    'img':{
        type:String ,
        required: false
    },
    "name":{
        type:String ,
        required: true
    },
    "email":{
        type:String ,
        required: true
    },
    "role":{
        type:String ,
        required: true
    },
})


const User = model("users",UserSchema)

module.exports = User