var clicks = 0;
const clickSender = (event) => {
  console.log("CLICK CORRECTO");
  removeDotItemPrevious();
  removeStyleElementsInRadioPrevious();

  // let todos = document.getElementsByTagName("*");
  let htmlElements = createXPathFromElement(event.target);
  console.log(htmlElements);
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
    })
  );

  //asignarle a los elemetos un style
  //addStyleElementsInRadio( htmlElements );
  writeDotItem();
};
const clickReact = function(event)
{   
    clickSender(event);
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
    clickSender(event);
    event.preventDefault();
    $("#tarea3").modal("show");

  }
  const tarea2 = function()
  {   
$("#usabilidadSpan").click(tarea2Helper);

    }

    const tarea3 = function(event)
    {
      clickSender(event);   
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
  $('.sg-popup-builder-content').click(function(ev) { ev.preventDefault(); ev.stopPropagation(); return false; });
  $('.popup').click(function(ev) { 
    ev.preventDefault(); ev.stopPropagation(); return false; });
    $('#searchform').submit(function(event) {
    
      clickSender(event);
      event.preventDefault();
  });



  