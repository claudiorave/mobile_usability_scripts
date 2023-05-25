$('a').click(function(ev) { ev.preventDefault(); ev.stopPropagation(); return false; });
$(document).ready(function () {
  $("#tarea1").modal("show");
});
const clickSender = (event, cFunction) => {
    let htmlElements = createXPathFromElement(event.target);
    let current_datetime = new Date();
    let formatted_date = current_datetime.getFullYear().toString().substr(-2) + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    makeRequest(
      JSON.stringify({
        type: "click",
        x: event.clientX,
        y: event.clientY,
        elements:[{xpath: htmlElements}] ,
        timestamp:  new Date(),
        session: sessionStorage.token,
        sitio: sessionStorage.sitio,
        tarea:sessionStorage.tarea
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
        elements:[{xpath: "START TAREA"}] ,
        timestamp:  new Date(),
        session: sessionStorage.token,
        sitio: sessionStorage.sitio,
        tarea:sessionStorage.tarea
      }),
    );
  };
const openTarea2 = ()=>{
    sessionStorage.setItem("tarea", 2);
    startTareaSender();
    $('#tareaSearch').click(clickSender);
    $('#searchIcon').click(clickSender);
    closeMenu();
        $('#tareaSearch').submit(buscador);
    } 
const openTarea3 = ()=>{
    sessionStorage.setItem("tarea", 3);
    startTareaSender();

    $('#formMail').click(clickSender);
    $('#suscribirmeSubmit').click(clickSender);
    closeSearch();
    $('#formMail').submit(checkMail);

}

const openTarea4 = ()=>{
    sessionStorage.setItem("tarea", 4);
    startTareaSender();
    $('#formMail').unbind("click", clickSender);
    $('#suscribirmeSubmit').unbind("click", clickSender);
    $(".menorPrecio").click(tareaFin);


}
const tarea2 = (event)=>{
    event.preventDefault();
    clickSender(event);
    $("#burga").unbind("click", clickSender);

    $("#tarea2").modal("show");
}
const openTareaHelper = () =>{
  $("#sidebar").click(helperModal);
};

const helperModal = () => {
$("#tarea" + sessionStorage.getItem("tarea")).modal("show");
}
const tarea1 = ()=>{
    sessionStorage.setItem("tarea", 1);
    startTareaSender();
    openTareaHelper();
    $("#burga").click(clickSender);
    $("#tareaMenu").click(tarea2);
}

const tareaFin = (event)=>{

    clickSender(event);

    redirect();
}
const redirect = ()=>{
  $("#spinner").show();
    window.location.replace("/sitios offline/kabytes_corregido/Kabytes.htm");
  }
const buscador = ()=>{
    event.preventDefault();
    if(event.target.searchInput.value.toLowerCase() === "plantas"){
        $("#tareaSearch").unbind("click", clickSender);
        $("#searchIcon").unbind("click", clickSender);

        $("#tarea3").modal("show");
        // endSession();
    }
}
const checkMail = ()=>{
    event.preventDefault();
    console.log(event.target.contactEmail.value);
    if(event.target.contactEmail.value.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
    $("#tarea4").modal("show");}
}

const closeMenu = ()=>{
$("#main-header--mobile-nav").css("display", "none");
}

const closeSearch = ()=>{
    $("#tareaSearch").css("display", "none");
    }


const openSearch = ()=>{
    event.preventDefault();
    $("#tareaSearch").css("display") == "none" ? $("#tareaSearch").css("display", "block") : $("#tareaSearch").css("display", "none");
}

