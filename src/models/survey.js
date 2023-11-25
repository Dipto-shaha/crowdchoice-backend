const { model, Schema } = require("mongoose");

const ServeySchema = new Schema({
    
    'title':{
        type:String ,
        required: false
    },
    "description":{
        type:String ,
        required: true
    },
    "name":{
        type:String ,
        required: true
    },
    "email":{
        type:String ,
        required: true
    },
    "date": {
        type: [Date],
        required: true,
    },
    "like":{
        type:Number ,
        required: true
    },
    "dislike":{
        type:Number ,
        required: true
    },
    "voteYes":{
        type:Number ,
        required: true
    },
    "voteNo":{
        type:Number ,
        required: true
    },
    "publish_status":{
        type:Boolean,
        required:true
    },
    "comment":[{
        name: {
            type: String,
            required: true,
          },
          text: {
            type: String,
            required: true,
          }
    }]
})


const Servey = model("servey",ServeySchema)

module.exports = Servey