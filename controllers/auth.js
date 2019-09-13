let router = require('express').Router()
let db = require('../models')
require('dotenv').config()
let jwt = require('jsonwebtoken')

router.post('/login', (req,res) => {
    // res.send('STUB - POST/LOGIN')
    db.User.findOne({email: req.body.email})
    .then(user => {
        if (!user || !user.password) {
            return res.status(404).send({ message: 'User not found' })
          }
      
          // Yay - we got a user. Let's check their password.
          if (!user.isAuthenticated(req.body.password)) {
            // Invalid credentials: wrong password
            return res.status(406).send({ message: 'Not Acceptable: Invalid Credentials!' })
          }

          res.send('You are logged in')
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/signup', (req,res) => {
    // console.log(req.body)
    // res.send('STUB - POST/Sign Up')
    db.User.findOne({email: req.body.email})
    .then(user => {
        if (user) {
            return res.status(409).send({message: 'E-mail address already in use'})
        }

        db.User.create(req.body)
        .then(newUser => {
            res.send('Thanks bro')
        })
        .catch(err => {
            console.log(err)
            res.send('Could not make user')

        })
    })
    .catch(err => {
        console.log(err)
        res.send('Something went wrong')
    })
})

router.get('/current/user', (req,res) => {
    res.send('STUB - current user route')
})




module.exports = router;