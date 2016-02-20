
var server = require("express")();
var qs = require("querystring");

server.get("/", function(req, res) {
  res.sendFile("radio.html", {root: __dirname});
});

server.post("/", function(req, res) {
  console.log("POST");
  var formValue;
  req.setEncoding("utf8");
  req.on("data", function(data) {
    // radio=on 형태를 {radio: "on"} 형태로 변환
    formValue = qs.parse(data).radio;
  });

  req.on("end", function() {
    console.log(formValue);
    // 클라이언트에 응답 전송 (웹페이지가 바뀌어 표시)
    res.end(formValue);
  })
})

server.listen(3000);
console.log("Server Start");
console.log("http://127.0.0.1:3000/ 에서 대기");
