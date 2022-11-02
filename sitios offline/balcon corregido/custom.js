const openTarea3 = function(){
    sessionStorage.setItem("tarea", 3);
    $('#searchform').submit(function() {
        $('#searchform').submit(function() {
            if(event.target.searchInput.value.toLowerCase() === "plantas"){
                $("#tarea3").modal("show");
                endSession();
        }})
  });
  }
const tarea2 = ()=>{
    event.preventDefault();

    $("#tarea2").modal("show");
}

const buscador = ()=>{
    event.preventDefault();
    if(event.target.searchInput.value.toLowerCase() === "plantas"){
        $("#tarea3").modal("show");
        endSession();}
}
const checkMail = ()=>{
    event.preventDefault();
    $("#tarea4").modal("show");
}

const closeMenu = ()=>{
$("#main-header--mobile-nav").css("display", "none");
}

const closeSearch = ()=>{
    $("#search-form3").css("display", "none");
    }
const openSearch = ()=>{
    event.preventDefault();
    $("#search-form3").css("display") == "none" ? $("#search-form3").css("display", "block") : $("#search-form3").css("display", "none");
}
