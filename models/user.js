// require stuff
let bcrypt = require('bcryptjs')

let mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        minlength: 1
    },
    lastname: String,
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        validate: {
            validator: (input) => {
                return /.*@?.*\..*/.test(input)
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32
    },
    profileUrl: String
})

// Use bcrypt to hash password (in this case we're hashing a password 12 rounds)
userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, 12)
    next()
})


//Ensure that password doesnt get set with the rest of the data
userSchema.set('toJSON', {
    transform: (doc, user) => {
        delete user.password
        return user
    }
})
//Create a helper function to compare the password hashes
userSchema.methods.isAuthenticated = function(typedPassword) {
    return bcrypt.compareSync(typedPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)