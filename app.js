const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
app.set('view engine', 'ejs');
let list1= [];

app.use(bodyParser.urlencoded({extended: true}));

let str="";
app.get("/", function(req, res){
    res.render(__dirname+"/views/list", {list: list1});
});
app.post("/", function(req, res){
    list1.push(req.body.text1);
    str="";
    for(let i = 0; i < list1.length; i++){
        str+=list1[i];
        str+=" \n "
    }
    res.redirect("/")
    console.log(list1);
});
app.listen(3000, function(){
    console.log("Hehe the server is up and running at 3000");
});