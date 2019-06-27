// ej 2.a
var padre = document.querySelector('ul');
var hijosDePadre = padre.children;
console.log(hijosDePadre);

// ej 2.b
var hijos = document.querySelector('li');
var padreDeHijos = hijos.parentElement;
console.log(padreDeHijos);

// ej 2.c
var cambiarH1 = document.querySelector('h1');
cambiarH1.innerHTML = '<em>Javascript isthe best my friends!</em>';

// ej CREAR ELEMENTOS
// var crear = document.querySelector('body');
// var nuevoCrear = document.createElement('h2');
// nuevoCrear.innerText = 'Hola soy un nuevo h2';
// crear.append(nuevoCrear);

// ej 2.d
var elementosP = document.querySelectorAll('p');
var numero = 0;

for (capturarP of elementosP) {
    numero++;
    if (numero%2 != 0) {
        capturarP.innerHTML = '​Párrafo número' + numero + ': <a href="#">enlace generado desde JS</a>​';
    }
    
}


    