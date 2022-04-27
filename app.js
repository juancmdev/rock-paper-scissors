const id = document.getElementById('cpu');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const choise = [];

rock.addEventListener('click', function(e){
    console.log('rock');
    if(e.target.dataset.id==='1'){
        console.log(true);
        choise.push(1)
    }else {
        console.log(false);
    }
    
})

console.log(choise);

paper.addEventListener('click', function(e){
    console.log('paper')
    choise = 2;
    console.log(choise);
})

scissors.addEventListener('click', function(e){
    console.log('scissors')
    choise = 3;
    console.log(choise);
})

console.log(choise);


//const player = prompt("Enter your choice:");
 //   console.log("Jugador: " + player);




function computer(){
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
    const randomNum = getRandomInt(1, 4); 
    
    console.log("Número Aleatorio: " + randomNum);
    
    if (randomNum == 1){
        console.log("CPU: Rock");
        id.innerHTML =`<i class="fas fa-hand-rock"></i>`;
        //const resPc = "Rock";
        //return resPc;
    }else if (randomNum == 2){
        console.log("CPU: Paper");
        id.innerHTML = `<i class="fas fa-hand-paper"></i>`;
        //const resPc = "Paper";
        //return resPc;
    } else if (randomNum == 3){
        console.log("CPU: Scissors");
        id.innerHTML =`<i class="fas fa-hand-scissors"></i>`;
        //const resPc = "Scissors";
        //return resPc;
    }
}

computer();



if (choise === 1) {
    console.log("Verdadero");
}else {
    console.log("falso");
}


/*function computerPlay(playerSelection, computerSelection){
    console.log("Resultado Jugador: " + playerSelection);
    //console.log("Resultado computadora: " +computerSelection);
}


computerPlay(player);*/





