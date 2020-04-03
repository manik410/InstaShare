const mongoose=require("mongoose");
var uniqueValidator = require('mongoose-unique-validator')
const postSchema=mongoose.Schema(
  {
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    email:{type:String,required:true}
  });
  postSchema.plugin(uniqueValidator)
  module.exports=mongoose.model('pass',postSchema);
