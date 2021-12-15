const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name : {
      type: String,
      required: [true, 'User must have a name'],
      unique: false,
    },
    email: {
      type: String,
      required: [true, "User must have an email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'User must have a password'],
        minlength: 8,
        select: false, 
    },
    passwordConform: {
        type: String,
        required: [true, 'User must confirm password'],
        
        validate: function(el){
            return el === this.password;
        },
        message: "Passwords are not same",
    },
  });

  userSchema.pre('save', function(next){

    //only run if pass is modified
    if(!this.isModified('password')) return next();

    //Bcrypt will generate random strings with password so that no two passwords are same
    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConform = undefined; //since we dont need it anymore after validation
    next();

  });

  //candidatePassword is pass that comes from body
  userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword);
  };

  const User = mongoose.model('User', userSchema);
  
  module.export = User;