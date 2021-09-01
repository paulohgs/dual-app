const express = require('express')
const router = express.Router()
const Alma = require('../pattyFW/class/alma')
const alma = new Alma()

router.get('/disciplinas', (req, res) => {
    res.render('alunoDisciplinas', {
        title: 'Dual - Disciplinas'
    })
})

router.get('/atividades', (req, res) => {
    res.render('atividadeAluno', {
        title: 'Dual - Atividades'
    })
})

router.post('/envio-atividade', (req,res) => {
    res.redirect(200,'atividades')
})

module.exports = router