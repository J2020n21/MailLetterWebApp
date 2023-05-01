const express = require("express");
const body_parser = require("body-parser");
const https = require("https");
const app = express();

app.use(body_parser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.send("Server running");
});

app.listen(3000,function(){
    console.log("3000 server is running.");
});
