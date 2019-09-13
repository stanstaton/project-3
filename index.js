//required packages
let express = require('express');
let app = express();

//middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '10mb' }))

//controllers
app.use('/auth', require('./controllers/auth'))

//routes
app.get('*', (req,res) => {
    res.status(404).send({message: 'Nothing to see here'})
})


//listening
app.listen(process.env.PORT || 3001, () => {
    console.log('Server started')
})