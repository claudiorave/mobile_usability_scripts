//ACÁ VAN LAS FUNCIONES USADAS EN COMÚN
var rand = function () {
  return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function () {
  return rand(); // to make it longer
};
sessionStorage.setItem("sitio", 5), sessionStorage.setItem("tarea", 0);
if (sessionStorage.getItem("token") == null){
  sessionStorage.setItem("token", token());
};


function makeRequest(jsonElements, cFunction = null) {
  var http = new XMLHttpRequest();
  var url = "https://df7c-190-191-105-21.ngrok-free.app/event/";  /*var email = document.getElementById('email');
var password = document.getElementById('pass');"*/
  http.open("POST", url, true);

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      if (cFunction) {
        cFunction(this);
      }
    }
  };
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  http.send(jsonElements);
}

function createXPathFromElement(elm) {
  var allNodes = document.getElementsByTagName("*");
  for (var segs = []; elm && elm.nodeType == 1; elm = elm.parentNode) {
    if (elm.hasAttribute("id")) {
      var uniqueIdCount = 0;
      for (var n = 0; n < allNodes.length; n++) {
        if (allNodes[n].hasAttribute("id") && allNodes[n].id == elm.id)
          uniqueIdCount++;
        if (uniqueIdCount > 1) break;
      }
      if (uniqueIdCount == 1) {
        segs.unshift('id("' + elm.getAttribute("id") + '")');
        return segs.join("/");
      } else {
        segs.unshift(
          elm.localName.toLowerCase() + '[@id="' + elm.getAttribute("id") + '"]'
        );
      }
    } else if (elm.hasAttribute("class")) {
      segs.unshift(
        elm.localName.toLowerCase() +
          '[@class="' +
          elm.getAttribute("class") +
          '"]'
      );
    } else {
      for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
        if (sib.localName == elm.localName) i++;
      }
      segs.unshift(elm.localName.toLowerCase() + "[" + i + "]");
    }
  }
  return segs.length ? "/" + segs.join("/") : null;
}
