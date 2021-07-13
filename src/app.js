const express = require('express');
const app = express();
const multer = require("multer");
const path = require("path")
app.use(express.static('public'));

app.set('view engine','ejs');

app.use('/public', express.static('public'));

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/");
    },
    filename: function(req,file,cb){
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage});

app.get("/upload",(req,res) => {
    res.render("html");
})
app.post("/upload/",upload.single("file"),(req,res)=>{
    res.render("Dual_Upload.ejs");
})

app.get('/', (req, res) => {
    res.send('Hello World')
});

module.exports = app;