let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')

let userSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true,
      minlength: 1
    },
    lastname: String,
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 32
    },
    profileUrl: String,
    bookedProperties: Array,
    properties: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property'
    }]
  })

  //use bcrypt to hash password
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

//create a helper function to compare the password hashes
userSchema.methods.isAuthenticated = function(typedPassword) {
    return bcrypt.compareSync(typedPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)