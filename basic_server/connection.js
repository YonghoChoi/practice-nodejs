// require를 통해 패키지를 호출
// 모든 패키지들은 require를 통해 가져올 수 있어야 한다. 그러므로 모든 패키지들은 자바스크립트로 구현되어 있다.
var fs = require("fs");
var http = require("http");
var server = http.createServer();

// http://localhost:3000으로 호출 시 메시지 로그가 두 번 출력된다.
// 그 이유는 요즘 나오는 대부분의 브라우저가 favicon.ico 를 위한 요청을 한번 더 보내기 때문
server.on("connection", function() {
  console.log("Connection 요청");
});

server.on("request", function(req, res) {
  fs.readFile("index.html", function(error, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
  console.log("Client Request");
});

server.listen(3000);
console.log("Server Start");
console.log("http://127.0.0.1:3000/ 에서 대기");
