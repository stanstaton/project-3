let router = require('express').Router()
let jwt = require('jsonwebtoken')
let db = require('../models')
require('dotenv').config()

//POST /auth.login (find and validate user; send token)
router.post('/login', (req, res) => {
    //find the user by their email in the database
    db.User.findOne({
        email: req.body.email
    })
    .then(user => {
        //Make suer we have a suer and that the user has a password
        if (!user || !user.password) {//if user and password is false (meaning no match)
        return res.status(404).send({ message: 'User not found'})
        }
        //Yay!! -WE GOT A USER. Lets check their password.
        if(!user.isAuthenticated(req.body.password)) { //if password email is wrong or misspelled
            //Invaled credentials (email, password)
            return res.status(406).send({ message: 'Not acceptable! Invalid Credentials'})
        }
        let token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 8 // 8 hours in seconds to expire
        })
           
        res.send({ token })
    })
    .catch( err => {
        //If something went wrong here, it's likely an issue with the DB or DB setup. or a typo
        console.log('Error in POST /auth/login', err)
        res.status(503).send({ message: 'Something went wrong, pobably DB related. Or you made a typo.' })
    })
})

router.post('/signup', (req, res) => {
    db.User.findOne({ email: req.body.email })
    .then(user => {
        // if user exist, do not let them create a duplicate account
        if(user) {
            return res.status(409).send({ message: 'Email address in use' })
        }

        //Good - they dont exist yet
        db.User.create(req.body)
        .then(newUser => {
            //we can assign them a token, lets make them a shiny new token!
            let token = jwt.sign(newUser.toJSON(), process.env.JWT_SECRET, { 
                expiresIn: 60 * 60  * 8 //(in seconds = 1 hr)
            })
            res.send({ token })
        })
        .catch(err => {
            console.log('Error when creating new user', err)
            res.status(500).send({ message: 'Error creating user' })
        })
    })
    .catch(err => {
        console.log('Error in POST /auth/signup', err)
        res.status(503).send({ message: 'Something wrong, prob DB related, or you made a typo' })
    })
  
})

//NOTE: User should be logged in to access this route (route should be protected)
router.get('/current/user', (req, res) => {
    //The use is logged in, so req.user should have data!
    if(!req.user || !req.user._id ) {
        return res.status(417).send({ message: 'Expectation Failed: Check Configuration'})
    }
    //NOTE: This is the user data from the time the token was issued
    //Therefor, if you update the user, those changes will not be reflected.
    //To avoid this, reissue a token when you update the user data
    res.send({ user: req.user })
})


module.exports = router