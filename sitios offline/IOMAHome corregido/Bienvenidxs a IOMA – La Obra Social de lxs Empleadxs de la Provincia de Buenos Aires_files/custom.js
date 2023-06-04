var clicks = 0;
$(document).ready(function () {
  $("#myModal").modal("show");
});
const clickSender = (event) => {
  removeDotItemPrevious();
  removeStyleElementsInRadioPrevious();

  // let todos = document.getElementsByTagName("*");
  let htmlElements = createXPathFromElement(event.target);
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear().toString().substr(-2) +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  makeRequest(
    JSON.stringify({
      type: "click",
      x: event.clientX,
      y: event.clientY,
      elements: [{ xpath: htmlElements }],
      timestamp: new Date(),
      session: sessionStorage.token,
      sitio: sessionStorage.sitio,
      tarea: sessionStorage.tarea,
    })
  );
};
const startAnimation = () => {
  $("#sidebar").addClass("animation");
};
const stopAnimation = () => {
  $("#sidebar").removeClass("animation");
};

const startTareaSender = () => {
  let current_datetime = new Date();
  makeRequest(
    JSON.stringify({
      type: "click",
      x: 0,
      y: 0,
      elements: [{ xpath: "START TAREA" }],
      timestamp: new Date(),
      session: sessionStorage.token,
      sitio: sessionStorage.sitio,
      tarea: sessionStorage.tarea,
    })
  );
};
const redirect = () => {
  $("#spinner").show();
  window.location.replace(
    "/sitios offline/balcon/Somos Balcón, Somos Plantennials – Balcón Plantas.htm"
  );
};
const clickReact = function (event) {
  clickSender(event);
  event.preventDefault();
  clicks = clicks + 1;
  var target = event.target;
  $(target).parent().parent().hide();
  if (clicks == 3) {
    $("#tarea2").modal("show");
  }
};
const tarea2Helper = function (event) {
  clickSender(event);
  event.preventDefault();
  $("#tarea3").modal("show");
};
const tarea1 = () => {
  sessionStorage.setItem("tarea", 1);
  startTareaSender();
  openTareaHelper();
  $(".sgpb-popup-close-button-2").on("touchstart mousedown click", clickReact);
};
const tarea2 = function () {
  sessionStorage.setItem("tarea", 2);
  startTareaSender();

  $("#usabilidadSpan").click(tarea2Helper);
};
const endSession = function () {
  var http = new XMLHttpRequest();
  var url =
    "https://mobilelogger.claudioraverta.com/session/" +
    sessionStorage.token +
    "/";
  var email = document.getElementById("email");
  var password = document.getElementById("pass");
  http.open("PATCH", url, true);

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      //aqui obtienes la respuesta de tu peticion
    }
  };
  jsonElements = JSON.stringify({
    active: false,
  });
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  console.log(jsonElements);
  http.send(jsonElements);
};
const tarea3 = function (event) {
  clickSender(event);
  event.preventDefault();

  if (event.target.searchInput.value.toLowerCase().replace(/\s/g, '') === "fin") {
    redirect();
  }
};

const openTareaHelper = () => {
  $("#sidebar").click(helperModal);
};

const helperModal = () => {
  $("#tarea" + sessionStorage.getItem("tarea")).modal("show");
};

const openTarea3 = function () {
  sessionStorage.setItem("tarea", 3);
  startTareaSender();

  $("#searchform").submit(function () {
    return tarea3(event);
  });
};

$("a").click(function (ev) {
  ev.preventDefault();
  ev.stopPropagation();
  return false;
});
$(".sg-popup-builder-content").click(function (ev) {
  ev.preventDefault();
  ev.stopPropagation();
  return false;
});
$(".popup").click(function (ev) {
  ev.preventDefault();
  ev.stopPropagation();
  return false;
});
$("#searchform").submit(function (event) {
  clickSender(event);
  event.preventDefault();
});
