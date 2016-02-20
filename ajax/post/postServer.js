var app = require("express")();
var url = require("url");

// npm install body-parser --save
// json 데이터 파싱
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  console.log("post: postAsync.html");
  res.sendFile("postAsync.html", {root: __dirname});
});

app.post("/", function(req, res) {
  console.log(req.body.sports, ", ", req.body.player);
  res.send("From Server : " + req.body.sports + ", " + req.body.player);
});

app.use(function(req, res) {
  var fileName = url.parse(req.url).pathname.replace("/", "");
  res.sendFile(fileName, {root: __dirname});
  console.log("use : ", fileName);
});

app.listen(3000);
console.log("port 3000");
