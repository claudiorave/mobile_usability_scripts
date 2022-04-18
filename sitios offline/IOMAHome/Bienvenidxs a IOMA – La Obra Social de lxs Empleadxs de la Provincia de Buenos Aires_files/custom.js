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
  $("#tareaFin").modal("show");
  
      }


  