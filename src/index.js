const express = require("express");
const setUpMiddleWare = require("./middleWares/setUpMidleware")
const connectDB = require('./db/ConnectDB')
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const user = require('../src/routes/user/user')
const survey = require('../src/routes/Survey/survey')
setUpMiddleWare(app);


app.use(user);
app.use(survey);


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



const main = async ()=>{
    await connectDB()
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
   
}


main()