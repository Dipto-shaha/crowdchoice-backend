const { model, Schema } = require("mongoose");

const FeedbackSchema = new Schema({
    "SurveyId":{
        type:String,
        required:true,
    },
    "message":{
        type:String,
        required:true
    },
    "surveyorEmail":{
        type:String,
        required:true
    }
})


const Feedback = model("feedbackServey",FeedbackSchema)

module.exports = Feedback