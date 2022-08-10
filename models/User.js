const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const UserSchema = new Schema({
    name: {type:String,required:true},
    lastName:{type:String},
    email:{type:String, required:true},
})

module.exports =User = model("User" , UserSchema)