const { model, Schema } = require("mongoose");

const VoteList = new Schema({
    
    'SurveyId':{
        type:String ,
        required: true
    },
    "voterEmail":{
        type:String ,
        required: true
    }
})


const voterList = model("voterList",VoteList)

module.exports = voterList