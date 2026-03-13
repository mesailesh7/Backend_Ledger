const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json())
app.use(cookieParser());



const authRouter = require('./routes/auth.routes');

app.get("/health", (req,res) => {
    res.send("Banking ledger server is running")
})

app.use("/api/auth", authRouter);

module.exports = app

