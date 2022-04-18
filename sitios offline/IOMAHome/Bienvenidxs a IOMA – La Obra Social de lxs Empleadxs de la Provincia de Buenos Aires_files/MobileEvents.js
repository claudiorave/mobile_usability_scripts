//ACÁ VAN LAS FUNCIONES USADAS EN COMÚN
var rand = function() {
  return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
  return rand(); // to make it longer
};    
    sessionToken = "IOMA-" + token();
    sessionStorage.setItem("token", sessionToken);
    var md = new MobileDetect(window.navigator.userAgent);
    var json = JSON.stringify({type:"device",phone: md.phone(), mobile: md.mobile(), tablet: md.tablet(), user_agent: md.userAgent(), build: md.versionStr("Build"), webkit: md.version("Webkit"), os: md.os(), height: window.screen.height, width: window.screen.width, session: sessionToken})
    makeRequest(json) 
    
function makeRequest(jsonElements) {
  var http = new XMLHttpRequest();
  var url = "https://claudioraverta.mobilelogger.com/event/";
  /*var email = document.getElementById('email');
var password = document.getElementById('pass');"*/
  http.open("POST", url, true);

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //aqui obtienes la respuesta de tu peticion
    }
  };
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  console.log(jsonElements);
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
