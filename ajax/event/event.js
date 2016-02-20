function getString(){
  var seq = 0;
  var xhr = new XMLHttpRequest();

  var types = ["abort", "error", "load", "loadstart", "loadend", "progress", "timeout"];
  types.forEach(function(type) {
    xhr.addEventListener(type, eventHandler, false);
  }, this);

  xhr.open("GET", "/getData.txt");
  xhr.send();

  function eventHandler(event) {
    console.log(event.type, ", ", ++seq);
    console.log("서버 데이터 : ", xhr.response);
  }
}
