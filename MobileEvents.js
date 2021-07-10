//ACÁ VAN LAS FUNCIONES USADAS EN COMÚN

function makeRequest(jsonElements, tipo) {
  var http = new XMLHttpRequest();
  console.log(tipo)
  var url = "http://9fbf94f67e52.ngrok.io/event/";
  /*var email = document.getElementById('email');
var password = document.getElementById('pass');"*/
  console.log(url);
  http.open("POST", url, true);

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //aqui obtienes la respuesta de tu peticion
    }
  };
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  console.log(jsonElements)
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
