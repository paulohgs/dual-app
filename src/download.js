var express = require('express');
var app = express();
app.get('/downloads/:id',function (req,res, next) {
    var filePath = "C:\Users\Joao\dual-app\downloads"
    var fileName = "teste.txt";
    res.download(filePath,fileName);
    next();
});