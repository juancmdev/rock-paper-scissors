const id = document.getElementById('cpu');
const container = document.querySelector('#container');
const p_choise = document.querySelector('#p-choise');
const player_container = document.querySelector('.player-container');
const cpu_container = document.querySelector('#r');
const winner = document.querySelector("#winner");
const looser = document.querySelector("#looser");



const datosPlayer = [];
console.log(datosPlayer);
const datosResults = [];



function datos(dato){
    datosPlayer.push(dato);
    console.log(datosPlayer);
    //console.log(parseInt(dato));
    //console.log(datosPlayer);
    Resultado(datos);
    resultPlayer(dato);
}


    container.addEventListener('click', function(e){
        //console.log(e.target);
        if(e.target.dataset.id === '2'){
            p_choise.innerHTML = `<i class="fas fa-hand-paper"></i>`;
            datos(parseInt(e.target.dataset.id))
        }
        if(e.target.dataset.id === '3'){
            p_choise.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
            datos(parseInt(e.target.dataset.id))
        }
        if(e.target.dataset.id === '1'){
            p_choise.innerHTML = `<i class="fas fa-hand-rock"></i>`;
            datos(parseInt(e.target.dataset.id))
        }
        
    })

   
function Resultado(dato){
    if(dato){
        setTimeout(function(){
            function computer(){
                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min)) + min;
                  }
                
                const randomNum = getRandomInt(1, 4);
                resultCpu(randomNum);
                
                //console.log("Número Aleatorio: " + randomNum);
                
                if (randomNum == 1){
                    //console.log("CPU: Rock");
                    id.innerHTML =`<i class="fas fa-hand-rock"></i>`;
                }else if (randomNum == 2){
                    //console.log("CPU: Paper");
                    id.innerHTML = `<i class="fas fa-hand-paper"></i>`;
                } else if (randomNum == 3){
                    //console.log("CPU: Scissors");
                    id.innerHTML =`<i class="fas fa-hand-scissors"></i>`;
                }
            }
            
            computer();

        }, 2000)
    }

}








function resultPlayer(dato){
    //console.log("Dato jugador: " + dato);
    if(dato === 2){
        player_container.innerHTML = `<i class="fas fa-hand-paper"></i>`;
        //datos(e.target.dataset.id)
        datosPlayer.push(dato);
        saveDataPlayer(dato);
    }
    if(dato === 3){
        player_container.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
        //datos(e.target.dataset.id)
        saveDataPlayer(dato);
    }
    if(dato === 1){
        player_container.innerHTML = `<i class="fas fa-hand-rock"></i>`;
        //datos(e.target.dataset.id)
        saveDataPlayer(dato);
    }
}

function resultCpu(datoCpu){
    //console.log("Dato CPU: " + datoCpu);
    if(datoCpu === 2){
        cpu_container.innerHTML = `<i class="fas fa-hand-paper"></i>`;

        //datos(e.target.dataset.id)
        saveDataCPU(datoCpu);
        
        
    }
    if(datoCpu === 3){
        cpu_container.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
        //datos(e.target.dataset.id)
        saveDataCPU(datoCpu);
        
    }
    if(datoCpu === 1){
        cpu_container.innerHTML = `<i class="fas fa-hand-rock"></i>`;
        //datos(e.target.dataset.id)
        saveDataCPU(datoCpu);
        
    }
}


/*function saveDataPlayer(datoPlayer){
    console.log("saveDataPlayer: " + datoPlayer);
    //return datoPlayer;
    
    
}

function saveDataCPU(inCpu){
    console.log("saveDataCpu: " + inCpu);
    
    
}


function resultadoFinal(){

}
*/
















 







