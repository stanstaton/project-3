let router = require('express').Router()
let db = require('../models')
require('dotenv').config()
let jwt = require('jsonwebtoken')
let expressJWT = require('express-jwt')

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

          let token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
              expiresIn: 60*60*8 //8 hours in seconds
          })

          res.send({token})
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
            let token = jwt.sign(newUser.toJSON(), process.env.JWT_SECRET, {
                expiresIn: 60*60*8 //in seconds
            })
            res.send({token})
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
    console.log(req.user)
    //the user is logged in, so req.user should have data

    if(!req.user || !req.user._id) {
        res.status(401).send({message: 'Check configuration'})
    }

    res.send({user: req.user})
})




module.exports = router;
