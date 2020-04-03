const mongoose=require("mongoose");
const FeedSchema=mongoose.Schema(
  {
    username:{type:String,required:true,unique:true},
    friends:[]
  });
  module.exports=mongoose.model('feed',FeedSchema);
