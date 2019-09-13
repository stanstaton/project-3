let router = require('express').Router()
let db = require('../models')

router.post('/login', (req,res) => {
    res.send('STUB - POST/LOGIN')
})

router.post('/signup', (req,res) => {
    res.send('STUB - POST/Sign Up')
})

router.get('/current/user', (req,res) => {
    res.send('STUB - current user route')
})




module.exports = router;