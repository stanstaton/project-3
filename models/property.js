let mongoose = require('mongoose')

let propertySchema = new mongoose.Schema({
    address: String,
    city: String,
    state: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    photos: {
        type: Array,
        default: null
    },
    neighborhood: {
        type: String,
        required: true
    },
    dates_unavailable: Array,
    description: String,
    maxNumberOfGuests: Number

})



module.exports = mongoose.model('Property', propertySchema)