const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone : {
        type: Number,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    isAdmin: {
        type: Boolean,
        default: false
    }


});

//pre save middleware function

userSchema.pre('save', async function(next){
    // this refers to the data that is being saved
    // modified checks if the password is being modified 
    // This is typically used to ensure that password hashing only occurs when the password is being changed or set for the first time.
    //gensalt is used to generate a salt , Salt is a random data that is used as an additional input to a one-way function that hashes data,and to protect password against dictionary/rainbow table attacks
    if(this.isModified('password')){
        const saltRounds = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    // the next() function is called to indicate that the middleware has completed its execution and to proceed to the next middleware or the save operation.
    next();
}
);
// instance method to generate token
userSchema.methods.generateToken = async function(){
    // this refers to the user object
    const user = this;
    // jwt with sign method is used to generate token 
    // payload is the data that is being sent in the token
    // secret is used to sign the token
    // expiresIn is the time after which the token will expire

    const token = jwt.sign(
        // payload
        {_id: user._id}, 
        // secret
        process.env.JWT_SECRET, 
        {expiresIn: '7d'});
    return token;
}


const userModel = mongoose.model('User', userSchema);
module.exports = userModel;