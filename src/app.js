const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dualRoutes = require("../routes/dualRoutes")
const alunoRoutes = require("../routes/alunoRoutes")
const multer = require("multer");
const path = require("path")

// Configurações do servidor
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// configuração mongodb
mongoose.Promise = global.Promise;
const newLocal = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect('mongodb://localhost:27017/dualapp', newLocal);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage
});

app.get("/upload", (req, res) => {
    res.render("upload", {
        title: 'Dual - Upload'
    });
})

app.post("/upload/", upload.single("file"), (req, res) => {
    res.render("upload", {
        title: 'Dual - Upload'
    });
})

app.use('/aluno', alunoRoutes)
app.use('/', dualRoutes)

app.use((req, res, next) => {
    res.status(404).render("404", {
        title: '404 - Página não encontrada'
    });
});


module.exports = app;