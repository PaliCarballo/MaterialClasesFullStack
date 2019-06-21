var curso = 'Full Stack';
//console.log(curso);

var comisiones = [
    'Mañana', 'Tarde', 'Noche'
];
//console.log(comisiones);

var boolean = true;
//console.log(boolean);

var ironMan = {
    nombre : "Iron Man",
    equipo : "Avengers",
    poderes : ["Volar", "Lanzar misiles", "Disparar láser"],
    energia : 100,
    getPoder : function(numero) {
        if(numero === 0){
            this.energia = this.energia - 20;
        } 
        if(numero === 1){
            this.energia = this.energia - 45;
        }
        if(numero === 2){
            this.energia = this.energia - 75;
        }

        return this.poderes[numero];
    } 
}; 

var aleatoreo = Math.floor(Math.random()*3);

console.log( 'Poder elegido = ' + ironMan.getPoder(aleatoreo) );
console.log( 'Nivel de energía = ' + ironMan.energia );


var hulk = {
    nombre : "Hulk",
    equipo : "Avengers",
    poderes : ["Aplastar", "Gritar", "Golpear"],
    energia : 100,
    getPoder : function(numero2) {
        if(numero2 === 0){
            this.energia = this.energia - 20;
        } 
        if(numero2 === 1){
            this.energia = this.energia - 45;
        }
        if(numero2 === 2){
            this.energia = this.energia - 75;
        }
        return this.poderes[numero2];
    }
};

var aleatoreo2 = Math.floor(Math.random()*3);

console.log( 'Poder elegido = ' + hulk.getPoder(aleatoreo2) );
console.log( 'Nivel de energía = ' + hulk.energia );


var misDatos = {
    nombre : 'Paloma',
    apellido : 'Carballo',
    dni : 47497028,
    comidaFavorita : 'Asado',
    edad : 27,
}

for (var key in misDatos){
    console.log(misDatos[key]);

    saludar : function() {
        return "Hola mi nombre es" + this.nombre + "y tengo" + this.edad + "años"
    }
}


 












