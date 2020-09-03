var express = require("express");
var multer = require('multer');
var app = express();
var storage = multer.diskStorage({
    destination: function (req,file, callback){
        callback(null,'./uploads');
    },
    filename:function(req, file,callback){
        callback(null, file.originalname);
    }
});
var upload = multer({ storage : storage}).single('myfile');

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index4.html");
});

app.post('/uploadjavatpoint', function(req,res){
    upload(req,res, function(err){
        if(err){
            return res.end("Error uploading file.");
        }
        res.sendFile("File is uploaded succesfully!");
    });
});

app.listen(2000,function(){
    console.log("Server is running on port 2000");
});