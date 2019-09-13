//required packages
let express = require('express');
let app = express();

//middleware


//controllers


//routes
app.get('*', (req,res) => {
    res.send('Nothing to see here')
})


//listening
app.listen(process.env.PORT || 3001, () => {
    console.log('Server started')
})