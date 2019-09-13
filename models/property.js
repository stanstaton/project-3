let mongoose = require('mongoose')

let propertySchema = new mongoose.Schema({
    address: String,
    city: String,
    state: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    photos: Array,
    neighborhood: {
        type: String,
        required: true
    },
    dates_unavailable: Array

})



module.exports = mongoose.model('Property', propertySchema)