const cookieParser = require("cookie-parser");
const cors = require('cors');
const express = require("express");
require("dotenv").config();

const setUpMiddleware = (app)=>{
    
// middleware
app.use(cors({
    origin: [
        'https://steady-cat-31c52a.netlify.app'
    ],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
}

module.exports = setUpMiddleware