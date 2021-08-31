const express = require('express')
const router = express.Router()
const Alma = require('../pattyFW/class/alma')
const alma = new Alma()

router.get('/disciplinas', (req, res) => {
    res.render('alunoDisciplinas', {
        title: 'Dual - Disciplinas'
    })
})

module.exports = router