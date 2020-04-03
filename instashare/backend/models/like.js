const mongoose=require("mongoose");
const LikeSchema=mongoose.Schema(
  {
    path:{type:String,required:true},
    likes:{type:Number,default:0},
    likedBy:[],
    comments:[{
      commentText:{type:String},
      commentedBy:{type:String}
    }
    ]
  });
  module.exports=mongoose.model('like',LikeSchema);
