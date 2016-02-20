var app = require("express")();
var url = require("url");
app.get("/", function(req, res) {
  console.log("get: timeout.html, ", __dirname);
  res.sendFile("timeout.html", {root: __dirname});
});

app.use(function(req, res) {
  var fileName = url.parse(req.url).pathname.replace("/", "");
  // timeout 의도적으로 발생
  if(fileName == "getData.txt") {
    setTimeout(function() {
      res.sendFile(fileName, {root: __dirname});
    }, 5000);
    console.log("timeout : ", fileName);
  } else {
    res.sendFile(fileName, {root: __dirname});
    console.log("use : ", fileName);
  }
});

app.listen(3000);
console.log("port 3000");
