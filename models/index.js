let mongoose = require('mongoose')

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || 'mongod://localhost/project-3', {useNewUrlParser: true})

module.exports.User = require('./user')
module.exports.Property = require('./property')