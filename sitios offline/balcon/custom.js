// $("a").click(function (ev) {
//     ev.preventDefault();
//     ev.stopPropagation();
//     return false;
// });

$("a").attr('href', '#');

$(document).ready(function () {
    $("#tarea1").modal("show");
});
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

const openTarea2 = (event) => {
    event.stopPropagation();
    sessionStorage.setItem("tarea", 2);
    startTareaSender();
    closeMenu();
    $("#tareaSearch").submit(buscador);
};
const openTarea3 = (event) => {
    event.stopPropagation();
    sessionStorage.setItem("tarea", 3);
    startTareaSender();
    $("#suscribeMail").addClass("clickEvent");
    $("#suscribirmeSubmit").addClass("clickEvent");
    closeSearch();
    $("#formMail").submit(checkMail);
};

const openTarea4 = (event) => {
    event.stopPropagation();
    sessionStorage.setItem("tarea", 4);
    startTareaSender();
    $("#suscribeMail").removeClass("clickEvent");
    $("#suscribirmeSubmit").removeClass("clickEvent");
    $(".menorPrecio").addClass("clickEvent");
    $(".menorPrecio").click(tareaFin);
};
const tarea2 = (event) => {
    $("#burga").removeClass("clickEvent");
    // $("#tareaMenu").removeClass("clickEvent");
    $("#searchIcon").addClass("clickEvent");
    $("#searchInput").addClass("clickEvent");
    $("#tarea2").modal("show");
};

const tarea2_start = (event) => {
    clickSender(event);
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
    $("#tareaMenu").addClass("clickEvent");
    $("#tareaMenu").click(tarea2);
};
$("#start_tarea1").unbind();
$("#start_tarea1").on("click", tarea1);
$("#start_tarea2").unbind();
$("#start_tarea2").on("click", openTarea2);
$("#start_tarea3").unbind();
$("#start_tarea3").on("click", openTarea3);
$("#start_tarea4").unbind();
$("#start_tarea4").on("click", openTarea4);
const tareaFin = (event) => {
    clickSender(event);

    redirect();
};
const redirect = () => {
    $("#spinner").show();
    window.location.replace("/mobile_usability_scripts/sitios offline/kabytes/Kabytes.htm");
};
const buscador = () => {
    event.preventDefault();
    if (event.target.searchInput.value.toLowerCase().replace(/\s/g, '') === "plantas") {
        $("#tareaSearch").removeClass("clickEvent");
        $("#searchIcon").removeClass("clickEvent");
        $("#searchInput").removeClass("clickEvent");

        $("#tarea3").modal("show");
        // endSession();
    }
};
const checkMail = () => {
    event.preventDefault();
    console.log(event.target.contactEmail.value);
    if (
        event.target.contactEmail.value
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    ) {
        $("#tarea4").modal("show");
    }
};

const closeMenu = () => {
    $("#main-header--mobile-nav").css("display", "none");
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
