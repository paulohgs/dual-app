const express = require('express')
const router = express.Router()
const Alma = require('../pattyFW/class/alma')
const alma = new Alma()



router.get('/', (req, res)=>{
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
    res.render("home", {
        title: 'Dual - Home'
    })
})

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Dual - Login'
    })
})

router.post('/entrar', (req,res) => {
    let data = {
        "user": req.body.user,
        "password": req.body.password
    }
    const readUser = alma.read_user(data.user)
    
    res.redirect('/atividades')

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

router.post('/registrar', (req,res) => {

    let data = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password
    }

    alma.create_a_user(data)

    res.redirect('/')    
})



router.get('/atividades', (req,res) =>{
    res.render('atividades', {
        title: 'Dual - Atividades'
    })
})

module.exports = router