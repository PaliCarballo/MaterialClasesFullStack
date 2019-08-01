<?php
//Hay librerias de js que nos dan el evento automaticamente se llama "enmascarar"

//cuando presionas la tecla mucho tiempo
on key press

//cuando presionas la tecla una vez
on key  down

//finaliza el evento
on key up


//en register.js capturo el input del form al que quiero asignarle el evento
window.onload = function () {
    // lo llamo con el id del input
    var dni = document.querySelector('#dni');

    dni.onkeydown = function (event) {
        if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode != 8) {
            
        } else {
            event.preventDefault();
        }
    };


    // para validar el email hay que sacarlo del for , porque el for es sincrónico y el fetch asíncrono. No deden validarse muchas cosas al mismo tiempo. VALIDAMOS TODO POR SEPARADO.
    1) valido vacío
    2) valido el name - igual q el dni selecciono el inpu del name




    
};




