const express = require("express");
const setUpMiddleWare = require("./middleWares/setUpMidleware")
require("dotenv").config();
const app = express();

const user = require('../src/routes/user/user')
const survey = require('../src/routes/Survey/survey')
const payment =require('../src/routes/Payment/payment')
const voter = require('../src/routes/SurveyInterAction/vote')
setUpMiddleWare(app);


app.use(user);
app.use(survey);
app.use(payment);
app.use(voter);

app.get("/health", (req, res) => {
  res.send("Servey Server is running....");
});

// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    res.send(error);
  // next(error);
});



// const main = async ()=>{
//     await connectDB()
//     app.listen(port, () => {
//         console.log(`Server is running on port ${port}`);
//     });
   
// }


// main()
module.exports = app;