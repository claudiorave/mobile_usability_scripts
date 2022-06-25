//*****misclick functions
function intersectan(center_x, center_y, radio, rect) {
  var dx = Math.max(rect.left - center_x, 0, center_x - rect.right);
  var dy = Math.max(rect.bottom - center_y, 0, center_y - rect.top);
  var minDist = Math.sqrt(dx * dx + dy * dy);

  return minDist <= radio;
}

function elementosRadio() {
  window.addEventListener("click", (event) => {
    printProperties(event.clientX, event.clientY, 55);
    removeDotItemPrevious();
    removeStyleElementsInRadioPrevious();

    // let todos = document.getElementsByTagName("*");
    let htmlElements = elementsInRadio(
      event.clientX,
      event.clientY,
      55,
      document.getElementsByTagName("*")
    );
    console.log(htmlElements);
    let current_datetime = new Date();
    let formatted_date = current_datetime.getFullYear().toString().substr(-2) + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    makeRequest(
      JSON.stringify({
        type: "misclick",
        x: event.clientX,
        y: event.clientY,
        elements: htmlElements,
        timestamp:  new Date(),
        session: sessionStorage.token,
        tarea: sessionStorage.tarea,
        sitio: sessionStorage.sitio
      })
    );

    //asignarle a los elemetos un style
    //addStyleElementsInRadio( htmlElements );
    writeDotItem();
  });
}

function removeDotItemPrevious() {
  let dot = document.getElementById("dot");
  if (!(dot == null)) {
    document.body.removeChild(dot);
  }
}

function removeStyleElementsInRadioPrevious() {
  //remover los elementos con boxShadow
  console.log("*** element con sombra anteriores ");
  let htmlItemsInRadio = document.getElementsByClassName("boxShadow");
  console.log(htmlItemsInRadio);

  for (i = 0; i < htmlItemsInRadio.length; i++) {
    htmlItemsInRadio[i].classList.remove("boxShadow");
  }
}

function elementsInRadio(center_x, center_y, radio, todos) {
  let htmlElements = new Array();
  // console.log("Los elementos son: ");

  for (var i = 0, max = todos.length; i < max; i++) {
    if (
      intersectan(center_x, center_y, radio, todos[i].getBoundingClientRect())
    ) {
      console.log(todos[i]);
      todos[i].classList.add("boxShadow");

      htmlElements.push({ xpath: createXPathFromElement(todos[i]) });
    }
  }
  return htmlElements;
}

function writeDotItem() {
  //crea div con position absuluta en los eje x e y
  let dot = document.createElement("div");
  //dot.className = "dot";
  dot.classList.add("dot");
  dot.setAttribute("id", "dot");

  dot.style.left = event.pageX - 4 + "px";
  dot.style.top = event.pageY - 4 + "px";
  //y se lo asigna a document body
  document.body.appendChild(dot);
}

function addStyleElementsInRadio(htmlElements) {
  //add class element in radio
  for (i = 0; i < htmlElements.length; i++) {
    htmlElements[i].classList.add("boxShadow");
  }
}

function printProperties(center_x, center_y, radio) {
  /*     console.log("*********************************************");
    console.log("Las coordenadas del click son x: " +center_x+" y:"+center_y)  
    console.log("El radio seleccionado es de: "+radio+"px"); */
  console.log(">>send click event info");
}


elementosRadio();
