let router = require('express').Router()
let db = require('../models')
require('dotenv').config()
let jwt = require('jsonwebtoken')
let expressJWT = require('express-jwt')


router.get('/', (req,res) => {
    res.send('You made it')
})

router.post('/new', (req,res) => {
    // res.send('STUB - registering a new property')
    db.Property.findOne({address: req.body.address})
    .then(prop => {
        if(prop) {
            return res.status(409).send({message: "property already listed"})
        }
        //prop doesn't exist
        db.Property.create(req.body)
        .then(newProp => {
            res.send('Successful registration of property')
        })
        .catch(err => {
            console.log(err)
            res.send('there was an issue creating the property')
        })
    })
    .catch(err => {
        console.log(err)
        res.send('there was an issue accessing the database')
    })

})


module.exports = router;