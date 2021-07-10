var http = new XMLHttpRequest ();
var url = "http://d9137c6e5c0e.ngrok.io/register";
/*var email = document.getElementById('email');
var password = document.getElementById('pass');"*/

http.open("POST", url, true);


http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) { 
       //aqui obtienes la respuesta de tu peticion
       alert(http.responseText);
    }
}
http.send(JSON.stringify({email:"email@miemail.com"}));