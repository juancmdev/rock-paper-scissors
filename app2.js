const cpuChoise = document.getElementById('cpu');
const container = document.querySelector('#container');
const p_choise = document.querySelector('#p-choise');
const player_container = document.querySelector('.player-container');
const cpu_container = document.querySelector('#r');
const winner = document.querySelector("#winner");
const looser = document.querySelector("#looser");

/*const saved = true;
console.log(saved);
saved = 1;
console.log(saved);

function suma(a, b){
    return a+b;
}

console.log(suma(3, 5));


const suma = function(a, b){
    return a+b;
}

console.log(suma("Hola ", 5));

function resultado(a){
    return a;
}
saved = resultado("Hola");
console.log(saved);

saved = resultado("Hola Nuevamente");
console.log(saved);*/

//----------------------------------------------------------------------------

let randomNum;
console.log(randomNum);

/*function obtenerNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

console.log(obtenerNumAleatorio(15, 5));*/

const obtenerNumAleatorio = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

console.log(obtenerNumAleatorio(45, 155));

randomNum = obtenerNumAleatorio(1, 3);
console.log(randomNum);

function pruebaIf(a){
    if(a === 1){
        return randomNum;
    }
    if(a === 2){
        return randomNum;
    }
    if(a === 3){
        return randomNum;
    }
}


//console.log("RandomNum * 30 = " + pruebaIf(randomNum));
randomNum = pruebaIf(randomNum);

console.log("Nuevo random = " + randomNum);

function resultadoFinal(a){
    console.log("Este es el resultado final: " + a);
}

resultadoFinal(randomNum);