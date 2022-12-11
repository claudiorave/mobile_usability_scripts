$('a').click(function(ev) { ev.preventDefault(); ev.stopPropagation(); return false; });

const openTarea2 = ()=>{
    sessionStorage.setItem("tarea", 3);
    closeMenu();
    $("#tarea2").modal("show");
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
    $("#menuTutorial").click(openTarea2);
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
$("#menu").removeClass("mm-current mm-opened");
}

const closeSearch = ()=>{
    $("#tareaSearch").css("display", "none");
    }


const openSearch = ()=>{
    event.preventDefault();
    $("#tareaSearch").css("display") == "none" ? $("#tareaSearch").css("display", "block") : $("#tareaSearch").css("display", "none");
}

const openMenu = ()=>{
  $("#menu").addClass("mm-current mm-opened");
}

const openSearchDiv = () =>{
    $("#buscador").css("display") == "none" && $("#buscador").css("display", "block");    
}

$(document).mouseup(function(e) 
{
    var container = $("#menu");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.removeClass("mm-current mm-opened");
    }

    var searchDiv = $("#buscador")
    var searchForm = $("#searchform")

    if (!searchForm.is(e.target) && searchForm.has(e.target).length === 0) 
    {
        searchDiv.css("display", "none");
    }

});