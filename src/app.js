const express = require('express');
const app = express();

const multer = require("multer");
const path = require("path")

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
    res.render("upload", {
        title: 'Dual - Upload'
    });
})

app.post("/upload/",upload.single("file"),(req,res)=>{
    res.render("upload", {
        title: 'Dual - Upload'
    });
})

app.get('/', (req, res) => {    
    res.redirect('home')
});

app.get('/home', (req, res) => {
    res.render("home", {
        title: 'Dual - Home'
    })
})
app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Dual - Login'
    })
})
app.use(function (req, res, next){
    res.status(404).render("404", {
        title: '404 - Página não encontrada'
    });
});



module.exports = app;