const express = require("express");
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080');

});

//누군가가 /pet 으로 방문을 하면 (get 요청을 하면)
//pet 관련된 안내문을 띄워주자.

app.get("/pet", function(req, res){
    res.send("Welcome");

});

//누군가 /beauty URL로 접속하면 (GET 요청을 하면)
//안내문을 띄워준다. (뷰티용품 쇼핑 페이지임)

app.get("/beauty", function(req,res){
    res.send("뷰티용품 페이지 입니다.");
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});