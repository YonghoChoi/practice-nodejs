function getString(){
  var xhr = new XMLHttpRequest();
  console.log("readyState : ", xhr.readyState);

  xhr.onreadystatechange = function() {
    console.log("readyState : ", xhr.readyState);
    if(xhr.readyState == xhr.DONE && xhr.status == 200) {
      console.log("통신 성공 : ", xhr.response);
    }
  };

  xhr.open("GET", "/getData.txt");
  xhr.onload = function() {
    console.log("onload 이벤트 발생 : ", xhr.readyState);
  };
  xhr.send();
}
