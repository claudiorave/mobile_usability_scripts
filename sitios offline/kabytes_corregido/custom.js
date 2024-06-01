// $("a").click(function (ev) {
//   ev.preventDefault();
//   ev.stopPropagation();
//   return false;
// });

$("a").attr('href', '#');
$(document).ready(function () {
  $("#tarea1").modal("show");
});
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
  http.send(jsonElements);
};


const disable = function (ev) {
  ev.preventDefault();
  ev.stopPropagation();
  return false;
};
const clickSender = (event, cFunction) => {
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
      }),
      cFunction
  );
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
var leerMas = 0;

const leerMasPlus = (event) => {
  leerMas++;
  clickSender(event);
  $(event.target).unbind("click", leerMasPlus);
  if (leerMas > 2) {
    endSession();
    $("#tarea4").modal("show");
  }
};
const openTarea2 = (event) => {
  event.stopPropagation();
  clickSender(event);
  $("#openSearch").unbind();
  $("#openSearch").addClass("clickEvent");
  $("#searchModal").unbind();
  $("#searchModal").addClass("clickEvent");
  $("#openSearch").children().addClass("clickEvent");
  $("#searchInput").unbind("click", clickSender);
  $("#searchform").addClass("clickEvent");
  $("#searchform").submit(buscador);
  $("#burga").removeClass("clickEvent");
  $("#menuTutorial").removeClass("clickEvent");
  $("#searchButton").addClass("clickEvent");
  $("#searchInput").addClass("clickEvent");
  sessionStorage.setItem("tarea", 2);
  closeMenu();
  $("#tarea2").modal("show");
};
const openTarea3 = (event) => {
  event.stopPropagation();
  closeSearch();
  $("#searchButton").removeClass("clickEvent");
  $("#searchInput").removeClass("clickEvent");
  sessionStorage.setItem("tarea", 3);
  startTareaSender();
  $(".read-more").click(leerMasPlus);
};

const startTarea2 = (event) => {
  event.stopPropagation();
  startTareaSender();
};

const openTarea4 = () => {
  $(".menorPrecio").click(tareaFin);
};
const openTareaHelper = () => {
  $("#sidebar").click(helperModal);
};

const helperModal = () => {
  $("#tarea" + sessionStorage.getItem("tarea")).modal("show");
};
const tarea1 = (event) => {
  event.stopPropagation();
  sessionStorage.setItem("tarea", 1);
  startTareaSender();
  openTareaHelper();
  $("#menuTutorial").addClass("clickEvent");
  $("#menuTutorial").click(openTarea2);
};
$( document ).ready(function() {
  $("#burga").unbind();
  $("#burga").addClass("clickEvent");
  $("#burga").children().addClass("clickEvent");
  $("#burga").children().children().addClass("clickEvent");
});

$("#start_tarea1").unbind();
$("#start_tarea1").on("click", tarea1);
$("#start_tarea2").unbind();
$("#start_tarea2").on("click", startTarea2);
$("#start_tarea3").unbind();
$("#start_tarea3").on("click", openTarea3);

const tareaFin = () => {
  event.preventDefault();

  $("#tareaFin").modal("show");
  return true;
};

const buscador = () => {
  event.preventDefault();
  if (event.target.searchInput.value.toLowerCase().replace(/\s/g, '') === "usuario") {
    $("#tarea33").modal("show");
  }
};

const closeMenu = () => {
  $("#menu").removeClass("mm-current mm-opened");
};

const closeSearch = () => {
  $("#tareaSearch").css("display", "none");
};

const openSearch = () => {
  event.preventDefault();
  $("#tareaSearch").css("display") == "none"
      ? $("#tareaSearch").css("display", "block")
      : $("#tareaSearch").css("display", "none");
};

const openMenu = () => {
  $("#menu").addClass("mm-current mm-opened");
};

const openSearchDiv = () => {
  $("#buscador").css("display") == "none" &&
  $("#buscador").css("display", "block");
};

$(document).mouseup(function (e) {
  var container = $("#menu");

  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.removeClass("mm-current mm-opened");
  }

  var searchDiv = $("#buscador");
  var searchForm = $("#searchform");

  if (!searchForm.is(e.target) && searchForm.has(e.target).length === 0) {
    searchDiv.css("display", "none");
  }
});
