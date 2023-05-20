import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name:{
    type:string,
    required:true
  },
  email:{
    type:string,
    required:true,
    unique:true
  },
  password:{
    type:string,
    required:true
  },
  timeStamp:{
    type:Date,
    default:Date.now
  }
});
module.exports = mongoose.model('user', UserSchema);