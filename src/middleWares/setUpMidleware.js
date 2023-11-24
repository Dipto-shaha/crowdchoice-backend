const cookieParser = require("cookie-parser");
const cors = require('cors');
const express = require("express");
require("dotenv").config();

const setUpMiddleware = (app)=>{
    
// middleware
app.use(cors({
    origin: [
        process.env.LOCAL_CLIENT,
        process.env.CLIENT
    ],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
}

module.exports = setUpMiddleware