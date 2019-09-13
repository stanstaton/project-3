//Require needed packages
require('dotenv').config()
let express = require('express')
let cors = require('cors')
let morgan = require('morgan')
let expressJwt = require('express-jwt')
let rowdyLogger = require('rowdy-logger')

// Instantiate app
let app = express()
let rowdyResults = rowdyLogger.begin(app)

//set-up middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '30mb' }))

//Routes
app.use('/auth', expressJwt({
    secret: process.env.JWT_SECRET
}).unless({
    path: [
        { url: '/auth/login', methods: ['POST']},
        { url: '/auth/signup', methods: ['POST']}
    ]
}),require('./controllers/auth'))

app.get('*', (req, res) => {
    res.status(404).send({ message: 'Not Found' })
})

app.listen(process.env.PORT || 3000, () => {
    rowdyResults.print()
  })