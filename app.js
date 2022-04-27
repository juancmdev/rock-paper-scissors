const id = document.getElementById('cpu');
const container = document.querySelector('#container');
const p_choise = document.querySelector('#p-choise');



    container.addEventListener('click', function(e){
        console.log(e.target);
        if(e.target.dataset.id === '1'){
            p_choise.innerHTML = `<i class="fas fa-hand-paper"></i>`;
        }
        if(e.target.dataset.id === '2'){
            p_choise.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
        }
        if(e.target.dataset.id === '3'){
            p_choise.innerHTML = `<i class="fas fa-hand-rock"></i>`;
        }
        
    })






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




/*function computerPlay(playerSelection, computerSelection){
    console.log("Resultado Jugador: " + playerSelection);
    //console.log("Resultado computadora: " +computerSelection);
}


computerPlay(playerSelection());*/





