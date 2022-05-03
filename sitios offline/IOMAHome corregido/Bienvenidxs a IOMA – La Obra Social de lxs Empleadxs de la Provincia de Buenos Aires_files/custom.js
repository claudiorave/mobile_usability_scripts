var clicks = 0;
const clickReact = function(event)
{   
    event.preventDefault();
    clicks = clicks + 1;
    console.log(clicks);
    var target = event.target;
    $(target).parent().parent().hide();
    if(clicks == 3){
      $("#tarea2").modal("show");
    }  
  }
  const tarea2Helper = function(event){
    event.preventDefault();
    $("#tarea3").modal("show");

  }
  const tarea2 = function()
  {   
$("#usabilidadSpan").click(tarea2Helper);

    }

    const tarea3 = function(event)
    {   
  event.preventDefault();
 
  if(event.target.searchInput.value === "fin"){
  $("#tareaFin").modal("show");
  }
  
      }

      const openTarea3 = function(){
        $('#searchform').submit(function() {
          return tarea3(event);
      });
      }

      
  $('a').click(function(ev) { ev.preventDefault(); ev.stopPropagation(); return false; });
  



  