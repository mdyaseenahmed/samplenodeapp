var express = require('express');

var app = express();

app.get("/", (req, res) => {
    res.send("Hello, User.!")
})

var server = app.listen(5000, () => { 
    // console.log('Listening on 5000')
})

module.exports = server;