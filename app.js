/*function player(){
    const player = prompt("Enter an option: rock, paper or scissors");
    console.log("Jugador: " + player);
}

player();*/




const player = prompt("Enter an option: rock, paper or scissors");
    console.log("Jugador: " + player);




function computer(){
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
    const randomNum = getRandomInt(1, 4); 
    
    console.log("Número Aleatorio: " + randomNum);
    
    if (randomNum == 1){
        console.log("Rock");
        const resPc = "Rock";
        return resPc;
    }else if (randomNum == 2){
        console.log("Paper");
        const resPc = "Paper";
        return resPc;
    } else if (randomNum == 3){
        console.log("Scissors");
        const resPc = "Scissors";
        return resPc;
    }
    return
}

computer();


function computerPlay(playerSelection, computerSelection){
    console.log("Resultado Jugador: " + playerSelection);
    //console.log("Resultado computadora: " +computerSelection);
}


computerPlay(player);





