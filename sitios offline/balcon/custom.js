$('a').click(function(ev) { ev.preventDefault(); ev.stopPropagation(); return false; });

const openTarea2 = ()=>{
    sessionStorage.setItem("tarea", 3);
    closeMenu();
        $('#tareaSearch').submit(buscador);
    } 
const openTarea3 = ()=>{
    closeSearch();
    $('#formMail').submit(checkMail);

}

const openTarea4 = ()=>{
    $(".menorPrecio").click(tareaFin);


}

const tarea2 = ()=>{
    event.preventDefault();

    $("#tarea2").modal("show");
}
const tarea1 = ()=>{
    $("#tareaMenu").click(tarea2);
}

const tareaFin = ()=>{
    event.preventDefault();
    console.log("TAREFA");

    $("#tareaFin").modal("show");
    return true;
}

const buscador = ()=>{
    event.preventDefault();
    if(event.target.searchInput.value.toLowerCase() === "plantas"){
        $("#tarea3").modal("show");
        endSession();}
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

