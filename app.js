const express = require('express');
const router = require('./src/routes/api');
const app = new express();

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require("path");

// Create a mongoDB Atlas Account AND GET Database Connection String
let option = { user: '', pass: '', autoIndex: true }
let URL = "mongodb://localhost:27017/OS_B-8_Assignment_4";
mongoose.connect(URL, option).then((res) => {
    console.log("Database Connected")
}).catch((err) => {
    console.log(err)
})


app.use(cookieParser())
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));


const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 })
app.use(limiter)

app.set('etag', false);
app.use("/api/v1", router)


module.exports = app;
