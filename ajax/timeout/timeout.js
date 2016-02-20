function getString(){
  var xhr = new XMLHttpRequest();
  // timeout을 2초로 설정
  // 2초동안 getData.txt를 수신하지 못하면 ontimeout 이벤트 발생
  xhr.timeout = 2000;

  xhr.open("GET", "/getData.txt");

  xhr.ontimeout = function() {
    console.log("timeout 발생 : ", (xhr.response || "데이터 없음"));
  };

  // ontimeout 이벤트가 발생하면 onload 이벤트는 발생되지 않음.
  xhr.onload = function() {
    // 서버에서 받은 데이터 출력
    var node = document.querySelector("p");
    node.innerHTML = xhr.response;
  };
  xhr.send();
}
