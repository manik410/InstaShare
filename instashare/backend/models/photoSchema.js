const mongoose=require("mongoose");
const postSchema=mongoose.Schema(
  {
    username:{type:String,required:true,index:true,unique:true},
    photos:[
      {
        path:String
      }]
  });
mongoose.set('useFindAndModify',false);
module.exports=mongoose.model('images',postSchema);
