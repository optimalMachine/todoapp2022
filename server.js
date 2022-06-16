const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
app.set ('view engine','ejs');

var db;
MongoClient.connect('mongodb+srv://admin:qwerty1234@cluster0.twazp.mongodb.net/todoapp?retryWrites=true&w=majority', function(err, client){
    if (err) return console.log(err)
    db = client.db('todoapp');
    // db.collection('post').insertOne({이름:'존',나이:20,_id:101}, (err,result)=>{
    //     console.log('save completed');
    // });
    app.listen(8080, function() {
      console.log('listening on 8080')
    });
  });
  
app.use(express.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/write",function(req,res){
    res.sendFile(__dirname +"/write.html");
});


//리스트로 GET요청으로 접속하면
//실제 DB에 저장된 데이터들로 예쁘게 꾸며진 HTML을 보여줌.
app.get("/list",(req,res)=>{
    res.render("list.ejs");

});

//어떤 사람이 /add 경로로 POST 요청을 하면...
//폼에 작성한 데이터를 확보한뒤 MongoDB에다가 저장한다.
 
app.post("/add", function(req,res){
    res.send("I got the data.");
    console.log(req.body.title);
    console.log(req.body.date);
    db.collection('post').insertOne({WhatToDo:req.body.title,Date:req.body.date}, (err,result)=>{
        console.log("save completed");
    })
});




//누군가가 /pet 으로 방문을 하면 (get 요청을 하면)
//pet 관련된 안내문을 띄워주자.
//app.get("/pet", function(req, res){
//    res.send("Welcome");
//});
//누군가 /beauty URL로 접속하면 (GET 요청을 하면)
//안내문을 띄워준다. (뷰티용품 쇼핑 페이지임)
//app.get("/beauty", function(req,res){
//    res.send("뷰티용품 페이지 입니다.");
//});

