const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const Passobj=require("./models/password");
const Imageobj=require("./models/photoSchema");
const Feedobj=require("./models/feed");
const Likeobj=require("./models/like");
var fs = require("fs");
var date = new Date();
const Picobj=require("./models/password");
path = require('path');
cors = require('cors');
multer = require('multer');
const crypto = require('crypto');
let i=0;
let count=0;
let filetype;
var status=false;
const friends=new Array();
const feedPath=new Array();
var username;
const PATH = 'C:/Users/sahil/OneDrive/Desktop/final/public';
mongoose.connect("mongodb://127.0.0.1:27017/InstaShare"
  // "mongodb+srv://manik:manik@cluster0-dv58p.mongodb.net/test?retryWrites=true&w=majority"
).then(()=>
{
  console.log("Connected To Database");
}).catch(()=>
{
  console.log("Connection Failed");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next)=>
{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});
app.post("/api/users",(req,res,next)=>
{
  Passobj.findOne({username:req.body.username}).then(documents =>
    {
      if(documents)
      {
        var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
        var mystr = mykey.update(req.body.password, 'utf8', 'hex')
        mystr += mykey.final('hex');
        if(documents.password==mystr)
        {
          res.status(200).json({
          message:1,
          posts: documents
          });
        }
        else
        {
          res.status(200).json(
            {
              message:0,
              posts:null
            })
        }
      }
    else
    {
      res.status(200).json(
        {
          message:0,
          posts:null
        })
    }
  });
});
app.post("/api/newuser",(req,res,next)=>
{
  var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
  var mystr = mykey.update(req.body.password, 'utf8', 'hex')
  mystr += mykey.final('hex');
    const newuser=new Passobj(
      {
        username:req.body.username,
        password:mystr,
        email:req.body.email
      });
      newuser.save((err,data)=>
      {
            if(data)
            {
              const fr=new Feedobj({
                username:req.body.username,
                friends:[req.body.username]
              });
              fr.save();
              res.status(201).json(
                {
                    message:'User added successfully'
                });
            }
            else
            {
              console.log(err.message);
              res.status(201).json(
                {
                    message:false
                });
            }
      });
  });
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
     filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null,  "image-" + Date.now()+ '.' + filetype);
  }
});
let upload = multer({
  storage: storage
});
app.post('/api/upload/:username', upload.single('image'), function (req, res) {
  if (!req.file) {
    console.log("No file is available!");
    return res.send({
      success: false
    });

  } else {
    console.log('File is available!');
    var body1={username:req.params.username};
    var query={username:body1.username};
    var body2={photos:[{path:"http://localhost:3002/"+req.file.filename}]};
   Imageobj.updateOne(query,body1,{upsert:true},function(err,data){
      Imageobj.updateOne(query,{$push:body2},{upsert:true},function(err,data){
        console.log("File uploaded Successfully");
      });
    });

  }
});
app.post("/api/myposts",(req,res,next)=>
{
  Imageobj.find({username:req.body.name}).then(documents =>
    {
      if(documents)
      {
          res.status(200).json({
          message:"Posts Fetched Successfully",
          posts: documents
          });
        }
      else
      {
        res.status(200).json(
        {
          message:"Posts cannot be fetched",
          posts:null
        })
    }
  });
});
    app.get("/api/Users/",(req,res,next)=>
    {
      Passobj.find({}).then(documents =>
        {
          if(documents)
          {
            res.status(200).json(
              {
                message:0,
                users:documents
              })
          }
        else
        {
          res.status(200).json(
            {
              message:0,
              users:null
            })
        }
      });
    });
    app.post("/api/myfriends/:username",(req,res,next)=>
    {
      Feedobj.find( { "username":req.params.username, "friends": { $in : [req.body.username]} }).count().then((data)=>
      {

        console.log(data);
        if(data==0)
        {
          var body3={username:req.params.username};
          var query={username:body3.username};
          var body4={friends:[req.body.username]};
         Feedobj.updateOne(query,body3,{upsert:true},function(err,data){
            Feedobj.updateOne(query,{$push:body4},{upsert:true},function(err,data){
              console.log("Friend Added Successfully");
            });
          });
          res.status(200).json(
            {
              message:"Friend Added Successfully"
            });
        }
        else
        {
          res.status(200).json(
            {
              message:"Friend Already Exists"
            });
        }
        });
    });
    app.get("/api/myFriends/:username",(req,res,next)=>
    {
        Feedobj.find({"username":req.params.username}).then(documents =>
        {
          if(documents)
          {
            res.status(200).json(
              {
                users:documents
              })
          }
        else
        {
          res.status(200).json(
            {
              users:null
            })
        }
      });
    });
    app.post("/api/removefriends/:username",(req,res,next)=>
    {
      var body5={username:req.body.name};
          var query={username:body5.username};
          var body6={friends:req.params.username};
         Feedobj.updateOne(query,body5,{upsert:true},function(err,data){
            Feedobj.updateOne(query,{$pull:body6},{upsert:false},function(err,data){
              console.log("Friend Removed Friend");
            });
          });
    });
    app.get("/api/myfeed/:username",(req,res,next)=>
{
   Feedobj.find({username:req.params.username}).then(documents=>
      {
        if(documents)
        {
          friends.splice(0,friends.length);
          feedPath.splice(0,feedPath.length);
         for(var i=0;i<documents[0].friends.length;i++)
         {
            friends.push(documents[0].friends[i]);
          }
          count=0;
          for(var i=0;i<friends.length;i++)
          {
            Imageobj.find({username:friends[i]}).then(documents =>
             {
                if(documents.length==0)
                {
                  count++;
                }
                else
                {
                  feedPath.push(documents[0]);
                  count++;
                }
                if(count==friends.length)
                {
                 return  res.status(200).json(
                    {
                        users:feedPath
                    });
                  }
              });

          }
        }
        });
    });
    app.post("/api/like/:username",(req,res,next)=>
    {
      var body1={path:req.body.path};
      var query={path:body1.path};
      var body2={$inc:{"likes":1}};
      var likedby={likedBy:[req.params.username]};
     Likeobj.updateOne(query,body1,{upsert:true},function(err,data){
        Likeobj.updateOne(query,body2,{upsert:true},function(err,data){
          Likeobj.updateOne(query,{$push:likedby},{upsert:true},function(err,data){
            console.log("Image Liked Successfully");
        });
        });
      });
      res.status(200).json(
        {
          message:"Liked successfully"
        });
    });
    app.post("/api/disLike/:username",(req,res,next)=>
    {
      var body1={path:req.body.path};
      var query={path:body1.path};
      var body2={$inc:{"likes":-1}};
      var likedby={likedBy:req.params.username};
     Likeobj.updateOne(query,body1,{upsert:true},function(err,data){
        Likeobj.updateOne(query,body2,{upsert:true},function(err,data){
          Likeobj.updateOne(query,{$pull:likedby},{upsert:true},function(err,data){
            console.log("Image DisLiked Successfully");
        });
        });
      });
      res.status(200).json(
        {
          message:"DisLiked successfully"
        });
    });
    app.get("/api/getLikes/:path",(req,res,next)=>
    {
        Likeobj.find({path:"http://localhost:3002/"+req.params.path}).then(documents=>
          {
            if(documents)
            {
              res.status(200).json(
                {
                    data:documents
                });
              }
              else
              {
                res.status(200).json(
                  {
                    data:"Sorry Cannot fetch"
                  }
                )
              }
          });
    });
    app.post("/api/getComments/",(req,res,next)=>
    {
          var body1={path:req.body.path};
          var query={path:body1.path};
          var body2={comments:[
            {
            commentText:req.body.comment,
            commentedBy:req.body.by
            }
          ]};
          var likedby={likedBy:[req.params.username]};
         Likeobj.updateOne(query,body1,{upsert:true},function(err,data){
              Likeobj.updateOne(query,{$push:body2},{upsert:true},function(err,data){
                console.log("Commented Successfully");
            });
          });
          res.status(200).json(
            {
              message:"Commented successfully"
            });
    });
    app.post("/api/deleteComment/:index/:path/",(req,res,next)=>
    {
          var body1={path:"http://localhost:3002/"+req.params.path};
          var query={path:body1.path};
          var body2={comments:{commentText:req.body.commentText}};
         Likeobj.updateOne(query,body1,{upsert:false},function(err,data){
              Likeobj.updateOne(query,{$pull:body2},{upsert:false},function(err,data){
                  res.status(200).json(
                    {
                      message:"Comment Deleted successfully"
                    });
            });
          });
    });

    app.post("/api/removePost/:username/",(req,res,next)=>
    {
          var body1={username:req.params.username};
          var query={username:body1.username};
          var body2={photos:{path:req.body.img}};
          var path=req.body.img.substring(22,req.body.img.length);
         Imageobj.updateOne(query,body1,{upsert:false},function(err,data){
              Imageobj.updateOne(query,{$pull:body2},{upsert:false},function(err,data){
                try {
                  fs.unlinkSync(PATH+'/'+path);
                  console.log('successfully deleted image');
                  Likeobj.findOneAndDelete({path:req.body.img}).exec();
                  res.status(200).json(
                    {message:'Successfully! Image has been Deleted'});
                } catch (err) {
                  console.log(error);
                }
            });
          });
    });
    module.exports = app;
