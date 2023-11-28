require("dotenv").config();
const connectDB = require('./src/db/ConnectDB')
const http = require('http');
const app = require("./src");
const port = process.env.PORT || 5000;
const server= http.createServer(app);

const main = async ()=>{
    await connectDB()
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
   
}
main();
