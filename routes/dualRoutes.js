const express = require('express')
const router = express.Router()
const Alma = require('../pattyFW/class/alma')
const alma = new Alma()
const User = require('../pattyFW/models/userModel');



router.get('/', (req, res) => {
    res.render('login', {
        title: 'Dual - Login'
    })
})

router.get('/pagina_inicial', (req, res) => {
    res.render("pag_inicial", {
        title: 'Dual - PaginaInicial'
    })
});

router.get('/home', (req, res) => {
    res.redirect('/login')
})

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Dual - Login'
    })
})

router.post('/entrar', async (req, res) => {

    let data = {
        "user": req.body.user,
        "password": req.body.password
    }

    if (!(data.user == "") && !(data.password == "")) {

        let user = await User.findOne({name: data.user})

        if (data.password == user.password) {
            return res.redirect('/aluno/disciplinas')
        } else {
            return res.redirect(400, '/')
        }
    } else {
        return res.redirect(400, '/')
    }


})

router.get('/cadastro', (req, res) => {
    res.render('register', {
        title: 'Dual - Cadastro'
    })
})

router.get('/redefinicao-de-senha', (req, res) => {
    res.render('redefinirSenha', {
        title: 'Dual - Redefinição de senha'
    })
})

router.post('/registrar', async (req, res) => {

    let data = {
        "name": req.body.name,  
        "email": req.body.email,
        "password": req.body.password
    }

    console.table(data)
    const user = User.findOne({name: data.name})

    if (!(data.user == "") && !(data.password == "") && !(data.email == "") && !(data.name == user.name)) {
        await alma.create_a_user(data);
        return res.redirect(200, '/login');
    } else {
        var errors = 'teste'
        return res.redirect(400, '/cadastro');

    }

    // res.redirect('/')    
})

module.exports = router