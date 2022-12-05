$('#prime').click(function() {
  toggleFab();
});

//Toggle chat and links
function toggleFab() {
  $('.prime').toggleClass('zmdi-comment-outline');
  $('.prime').toggleClass('zmdi-close');
  $('.prime').toggleClass('is-active');
  $('.prime').toggleClass('is-visible');
  $('#prime').toggleClass('is-float');
  $('.chat').toggleClass('is-visible');
  $('.fab').toggleClass('is-visible');
  
}

$('#chat_first_screen').click(function(e) {
      hideChat(1);
});

$('#chat_fullscreen_loader').click(function(e) {
$('.fullscreen').toggleClass('zmdi-window-maximize');
$('.fullscreen').toggleClass('zmdi-window-restore');
$('.chat').toggleClass('chat_fullscreen');
$('.fab').toggleClass('is-hide');
$('.header_img').toggleClass('change_img');
$('.img_container').toggleClass('change_img');
$('.chat_header').toggleClass('chat_header2');
$('.fab_field').toggleClass('fab_field2');
$('.chat_converse').toggleClass('chat_converse2');
});

function hideChat(hide) {
    switch (hide) {
      case 0:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'block');
            $('.chat_fullscreen_loader').css('display', 'none');
             $('#chat_fullscreen').css('display', 'none');
            break;
      case 1:
            $('#chat_converse').css('display', 'block');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      }
} 

function chatFuncion(){
      codigoHTML = new String();
      ubicacion = document.getElementById("chat_converse");
      codigoHTML += '<span class=\"chat_msg_item chat_msg_item_admin\">';
      codigoHTML += '<div class=\"chat_avatar\">';
      codigoHTML += '<img src=\"img/mon.png\" alt=\"imagenChat\"/>';
      codigoHTML += '</div>';
      codigoHTML += 'Puedes escribirme alguna pregunta o solamente una palabra relacionada y yo me encargaré de buscar la información que necesitas.';
      codigoHTML += '</span>';
      ubicacion.insertAdjacentHTML('beforeend', codigoHTML);
      ubicacion.scrollTop = (ubicacion.scrollHeight - ubicacion.clientHeight);
      console.log(ubicacion.scrollTop);
      faq();
}

function faq(){
      codigoHTML = new String();
      ubicacion = document.getElementById("chat_converse");
      codigoHTML += '<span class=\"chat_msg_item chat_msg_item_admin\">';
      codigoHTML += '<div class=\"chat_avatar\">';
      codigoHTML += '<img src=\"img/mon.png\" alt=\"imagenChat\"/>';
      codigoHTML += '</div>';
      codigoHTML += 'Si deseas saber más puedes acudir a la sección de preguntas frecuentes (FAQ).';
      codigoHTML += '</span>';
      ubicacion.insertAdjacentHTML('beforeend', codigoHTML);
      ubicacion.scrollTop = (ubicacion.scrollHeight - ubicacion.clientHeight);
      console.log(ubicacion.scrollTop);
}

function mostrar(){
      codigoHTML = new String();
      ubicacion = document.getElementById("pruebaBD");
      codigoHTML += '<table>' +
      '<thead>' +
          '<tr>'+
              '<th>Palabra</th>' +
          '</tr>' +
      '</thead>' +
     '<tbody>' +            
          '<\% palabras.forEach(resultado => { \%>' +
          '<tr>' +
          '<td><\%= resultado.palabra \%></td> ' +
      '</tr>' +
      '<\% }) \%>' +
      '</tbody>'
      '</table>';
      ubicacion.insertAdjacentHTML('beforeend', codigoHTML);
}

function datosBD(palabras){
      const palObject = JSON.parse(palabras);
      for(element of palObject){
            console.log("Palabras: \n" + element.palabra);
      }
}

function informacion(valor, palabra){
      codigoHTML = new String();
      ubicacion = document.getElementById("chat_converse");
      if(valor == 1){
            codigoHTML += '<span class=\"chat_msg_item chat_msg_item_admin\">';
            codigoHTML += '<div class=\"chat_avatar\">';
            codigoHTML += '<img src=\"img/mon.png\" alt=\"imagenChat\"/>';
            codigoHTML += '</div>';
            codigoHTML += 'Sabías que la situación social o económica y algunos comportamientos sexuales aumentan la vulnerabilidad de las personas a las infecciones de transmisión sexual.';
            codigoHTML += '</span>';
            codigoHTML += '<span class=\"chat_msg_item chat_msg_item_admin\">';
            codigoHTML += '<div class=\"chat_avatar\">';
            codigoHTML += '<img src=\"img/mon.png\" alt=\"imagenChat\"/>';
            codigoHTML += '</div>';
            codigoHTML += 'Te recomiendo el siguiente enlace con información sobre ' + palabra + '<br>' ;
            codigoHTML += '<a>' + 'https://www.clinicasabortos.mx/sexualidad' + '</a>';
            codigoHTML += '</span>';
      }
      if(valor == 2){
            codigoHTML += '<span class=\"chat_msg_item chat_msg_item_admin\">';
            codigoHTML += '<div class=\"chat_avatar\">';
            codigoHTML += '<img src=\"img/mon.png\" alt=\"imagenChat\"/>';
            codigoHTML += '</div>';
            codigoHTML += 'Te recomiendo el siguiente enlace con información sobre ' + palabra + '<br>' ;
            codigoHTML += '<a href=\"https://www.clinicasabortos.mx/embarazo\" target=\"_blank\">' + 'https://www.clinicasabortos.mx/embarazo' + '</a>';
            codigoHTML += '</span>';
      }
      ubicacion.insertAdjacentHTML('beforeend', codigoHTML);
      ubicacion.scrollTop = ubicacion.scrollHeight - ubicacion.clientHeight;
}

function interaccionControlada(){
      codigoHTML = new String();
      ubicacion = document.getElementById("chat_converse");
      mensaje = document.getElementById('chatSend');
      console.log(mensaje.value);
      mensaje1 = mensaje.value;
      mensaje.value = "";
      codigoHTML += '<span class=\"chat_msg_item chat_msg_item_user\">';
      codigoHTML += mensaje1;
      codigoHTML += '</span>';
      ubicacion.insertAdjacentHTML('beforeend', codigoHTML);
      codigoHTML = '';
      codigoHTML += '<span class=\"chat_msg_item chat_msg_item_admin\">';
      codigoHTML += '<div class=\"chat_avatar\">';
      codigoHTML += '<img src=\"img/mon.png\" alt=\"imagenChat\"/>';
      codigoHTML += '</div>';
      if(mensaje1 == 'Hola' || mensaje1 == 'hola' ||  mensaje1 == 'HOLA'){
            codigoHTML += 'Hola, ¿cómo estás?';
            codigoHTML += '</span>';
      }
      else if(mensaje1 == 'Bien' || mensaje1 == 'bien' || mensaje1 == 'BIEN'){
            codigoHTML += 'Me alegra oír eso, ¿Cómo te llamas?';
            codigoHTML += '</span>';
      }
      else if(mensaje1 == 'Mal' || mensaje1 == 'mal' || mensaje1 == 'MAL'){
            codigoHTML += '¿Por qué? ¿Cuentáme qué te ha sucedido?';
            codigoHTML += '</span>';
      }
      else if(mensaje1 == 'Alexis' || mensaje1 == 'alexis' || mensaje1 == 'ALEXIS'){
            codigoHTML += 'Mucho gusto ' + mensaje1 + ' yo me llamo MON\n';
            codigoHTML += '¿Te gustaría hablar sobre un tema en particular?'
            codigoHTML += '</span>';
      }
      else if(mensaje1 == 'No' || mensaje1 == 'no' || mensaje1 == 'NO'){
            codigoHTML += 'Muy bien, aquí estaré si me necesitas.';
            codigoHTML += '</span>';
      }
      else if(mensaje1 == 'Si' || mensaje1 == 'si' || mensaje1 == 'SI'){
            codigoHTML += '¿Sobre cuál tema te gustaría saber más?';
            /*palabras.forEach(resultado => {
                  codigoHTML += '<br>' + resultado.idp + '. ' + resultado.palabra;
            })*/
            const palObject = JSON.parse(palabras);
            for(element of palObject){
                  codigoHTML += '<br>' + element.id + '. ' + element.palabra;
            }
            codigoHTML += '</span>';
      }
      else if(mensaje1 == 'Sexualidad' || mensaje1 == 'sexualidad' || mensaje1 == 'SEXUALIDAD'){
            $("#pruebaFlotante").removeClass("oculto"); 
            $("#pruebaFlotante").addClass("visible"); 
            codigoHTML += 'Mira esta infografía sobre sexualidad. Para quitarla solo debes enviarme un ' +
            'mensaje con la palabra "Quitar".';
            codigoHTML += '</span>';
      }
      else if(mensaje1 == 'Quitar' || mensaje1 == 'quitar' || mensaje1 == 'QUITAR'){
            $("#pruebaFlotante").removeClass("visible"); 
            $("#pruebaFlotante").addClass("oculto"); 
            codigoHTML += 'Espero te haya sido de utilidad, puedes consultar otros temas si te interesa.';
            codigoHTML += '</span>';
      }
      else if(mensaje1 == 'Gracias' || mensaje1 == 'gracias' || mensaje1 == 'GRACIAS'){
            codigoHTML += 'No hay de qué, espero haber sido de utilidad. Aquí seguiré si me necesitas.';
            codigoHTML += '</span>';
      }
      else{
            codigoHTML += 'No entiendo muy bien tu mensaje...';
            codigoHTML += '</span>';
      }
      ubicacion.insertAdjacentHTML('beforeend', codigoHTML);
      ubicacion.scrollTop = ubicacion.scrollHeight - ubicacion.clientHeight;
      codigoHTML = '';
}

function procesarMensaje(){
      mensajeDeChatbot = '';
      copiaDeMensaje = mensajeDeUsuario();
      var url = '';
      var mensaje = {chat_message: copiaDeMensaje}
      var horaCompleta = new Date();
      const options = {
            method: 'POST',
            body: JSON.stringify(mensaje),
            headers: {
            'Content-Type': 'application/json'
      }}
      if(copiaDeMensaje[0] == '¿'){
            url = 'http://localhost:3000/preguntas';

            // send POST request
            fetch(url, options)
            .then(res => res.json())
            .then(res => respuestaDeChatbot(res[0].respuesta, 150))
            .catch(err => respuestaDeChatbot('No entiendo muy bien tu mensaje. Podrías intentar escribir la pregunta con otras palabras.', 0));   
      }
      else if(copiaDeMensaje == "Hola" || copiaDeMensaje == "Buenos días" || copiaDeMensaje == "Buenas tardes" || copiaDeMensaje == "Buenas noches"){
            horaActual = horaCompleta.getHours();
            console.log(horaActual);
            if(horaActual >= 6 && horaActual <= 12){
                  mensajeDeChatbot = "Buenos días, ¿Qué te gustaría saber?";
                  respuestaDeChatbot(mensajeDeChatbot, 0);
            }
            else if(horaActual >= 13 && horaActual <= 19){
                  mensajeDeChatbot = "Buenas tardes, ¿Qué te gustaría saber?";
                  respuestaDeChatbot(mensajeDeChatbot, 0);
            }
            else{
                  mensajeDeChatbot = "Buenas noches, ¿Qué te gustaría saber?";
                  respuestaDeChatbot(mensajeDeChatbot, 0);
            }
      }
      else if(copiaDeMensaje == "Quiero la definición de algo"){
            mensajeDeChatbot = "¿Qué palabra quieres que te defina? Escríbela a continuación.";
            respuestaDeChatbot(mensajeDeChatbot, 0);
      }
      else if(copiaDeMensaje == "Sexting"){
            respuestaDeChatbot("Te recomiendo este artículo donde se habla más a profundidad sobre el sexting", 0);
            blog = document.getElementById("blogHB");
            blog.click();
            blog.focus();
            ifram = document.getElementById("iframeBlog");
            ifram.focus();
      }
      else if(copiaDeMensaje == "Adiós"){
            respuestaDeChatbot("Espero haberte sido de utilidad, nos vemos luego.");
      } 
      else if(copiaDeMensaje == "Quisiera acudir a un centro médico"){
            respuestaDeChatbot("Permíteme conocer tu ubicación para poder mostrarte los centros de salud cercanos a ti.", 0);
            respuestaDeChatbot("Estos datos solo se usarán una vez así que no tienes que preocuparte del mal uso de los mismos.", 0);
      }
      else{
            url = 'http://localhost:3000/definicion'

            // send POST request
            fetch(url, options)
            .then(res => res.json())
            .then(res => respuestaDeChatbot(res[0].definicion, 0))
            .catch(err => respuestaDeChatbot('Parece que aun no me enseñan el significado de esto. Prueba algo diferente.', 0));   
      }
}

function palabras(){
      console.log(palabras);
}

//Función para mostrar los mensajes escritos por el usuario en la pantalla.
function mensajeDeUsuario(){
      codigoHTML = new String();
      ubicacion = document.getElementById("chat_converse");
      mensaje = document.getElementById('chatSend');
      copiaDelMensaje = mensaje.value;
      codigoHTML += '<span class=\"chat_msg_item chat_msg_item_user\">';
      codigoHTML += mensaje.value;
      codigoHTML += '</span>';
      ubicacion.insertAdjacentHTML('beforeend', codigoHTML);
      //ubicacion.scrollTop = ubicacion.scrollHeight - ubicacion.clientHeight;
      //document.getElementById("campoDeMensajes").submit();
      mensaje.value = "";
      return copiaDelMensaje;
}

//Función para escribir los mensajes del chatbot en la pantalla.
function respuestaDeChatbot(mensaje, controlDeAltura){
      codigoHTML = new String();
      ubicacion = document.getElementById("chat_converse");
      console.log("Dimensiones antes de insertar: ")
      console.log("ScrollTop: ")
      console.log(ubicacion.scrollTop);
      console.log("ScrollHeight: ")
      console.log(ubicacion.scrollHeight);
      console.log("ClientHeight: ")
      console.log(ubicacion.clientHeight);
      codigoHTML += '<span class=\"chat_msg_item chat_msg_item_admin\">';
      codigoHTML += '<div class=\"chat_avatar\">';
      codigoHTML += '<img src=\"img/mon.png\" alt=\"imagenChat\"/>';
      codigoHTML += '</div>';
      codigoHTML += mensaje;
      codigoHTML += '</span>';
      ubicacion.insertAdjacentHTML('beforeend', codigoHTML);
      console.log("Dimensiones después de insertar: ")
      console.log("ScrollTop: ")
      console.log(ubicacion.scrollTop);
      console.log("ScrollHeight: ")
      console.log(ubicacion.scrollHeight);
      console.log("clientHeight: ")
      console.log(ubicacion.clientHeight);
      ubicacion.scrollTop = (ubicacion.scrollHeight - ubicacion.clientHeight) - controlDeAltura;
}


//Función para añadir los estilos a la página de inicio al cargarla por primera vez.

window.onload = function(){
      const link2 = document.createElement("link");
      link2.rel = "stylesheet";
      link2.href = "css/INICIO.css";
      link2.media = "screen";
      link2.id = "cssInicio";
      document.head.appendChild(link2);
}

//Funciones para mostrar las páginas principales dinámicacmente.

$("#inicioHB").click(function () {
      const link = (document.querySelector("#cssFAQ") || document.querySelector("#cssBlog"));
      const link2 = document.createElement("link");
      link2.rel = "stylesheet";
      link2.href = "css/INICIO.css";
      link2.media = "screen";
      link2.id = "cssInicio";
      document.head.replaceChild(link2, link);
      $("#changePage2").removeClass("visible");
      $("#changePage2").addClass("oculto");
      $("#changePage3").removeClass("visible");
      $("#changePage3").addClass("oculto");
      $("#changePages").removeClass("oculto");
      $("#changePages").addClass("visible");
});

$("#faqHB").click(function () {
      const link = (document.querySelector("#cssInicio") || document.querySelector("#cssBlog"));
      const link2 = document.createElement("link");
      link2.rel = "stylesheet";
      link2.href = "css/FAQ.css";
      link2.media = "screen";
      link2.id = "cssFAQ";
      document.head.replaceChild(link2, link);
      $("#changePages").removeClass("visible");
      $("#changePages").addClass("oculto");
      $("#changePage3").removeClass("visible");
      $("#changePage3").addClass("oculto");
      $("#changePage2").removeClass("oculto");
      $("#changePage2").addClass("visible");
});

$("#blogHB").click(function () {
      const link = (document.querySelector("#cssInicio") || document.querySelector("#cssFAQ"));
      const link2 = document.createElement("link");
      link2.rel = "stylesheet";
      link2.href = "css/BLOG.css";
      link2.media = "screen";
      link2.id = "cssBlog";
      document.head.replaceChild(link2, link);
      $("#changePages").removeClass("visible");
      $("#changePages").addClass("oculto");
      $("#changePage2").removeClass("visible");
      $("#changePage2").addClass("oculto");
      $("#changePage3").removeClass("oculto");
      $("#changePage3").addClass("visible");
});

//Añadir la tecla enter para el envío de mensajes

window.addEventListener("keydown", (event) => {
      let key = event.key;
      if (key == "Enter") {
            event.preventDefault();
            procesarMensaje();
      }
});

//Envío de mensajes mediante el botón del chatbot.

window.addEventListener("click", (event) => {
      let clic = event.target;
      if (clic == document.querySelector("#enviar")) {
            procesarMensaje();
      }
});
