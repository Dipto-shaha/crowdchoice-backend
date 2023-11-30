const { model, Schema } = require("mongoose");

const UserFeedbackSchema = new Schema({
    "SurveyId":{
        type:String,
        required:true,
    },
    "message":{
        type:String,
        required:true
    }
})

const UserFeedback = model("userfeedback",UserFeedbackSchema)

module.exports = UserFeedback