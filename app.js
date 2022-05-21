const containerLogos = document.querySelector(".container-logos");
const insertPchoice = document.querySelector("#insertPchoice");
const pChoice = document.querySelector("#p-choise");
const insertCpuChoice = document.querySelector("#insertCpuChoice");
const playerResult = document.querySelector("#playerResult");
const cpuResult = document.querySelector("#cpuResult");
const cpuChoice = document.querySelector("#cpuChoice");
const playerAdvise = document.querySelector("#playerAdvise");
const cpuAdvise = document.querySelector("#cpuAdvise");
const playerScore = document.querySelector("#playerScore");
const cpuScore = document.querySelector("#cpuScore");
const remaining = document.querySelector('span');
const finish = document.querySelector('#finish');
const draw = document.querySelector('#draw');
const winner = document.querySelector('#winner');
const looser = document.querySelector('#looser');
const btn = document.querySelector('.btn');
const reloadBtn = document.querySelector('.reloadBtn');


let playerChoice;
let computerChoice;
let result;
let playerCount = 0;
let cpuCount = 0;
let remainingAttempts = 10;

containerLogos.addEventListener('click', function(e){
    playerChoice = parseInt(e.target.dataset.id);
    //console.log(playerChoice);
    if(playerChoice === 1){
        insertPchoice.innerText = "Rock";
        pChoice.innerHTML = `<i class="fas fa-hand-rock"></i>`;
        playerResult.innerHTML = `<i class="fas fa-hand-rock"></i>`;
    }
    if(playerChoice === 2){
        insertPchoice.innerText = "Paper";
        pChoice.innerHTML = `<i class="fas fa-hand-paper"></i>`;
        playerResult.innerHTML = `<i class="fas fa-hand-paper"></i>`;

    }
    if(playerChoice === 3){
        insertPchoice.innerText = "Scissors";
        pChoice.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
        playerResult.innerHTML = `<i class="fas fa-hand-scissors"></i>`;

    }
    
    randomCpuChoise();
    getResults();
})


function randomCpuChoise(){
    computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);

    if(computerChoice === 1){
        insertCpuChoice.innerText = "Rock";
        cpuChoice.innerHTML = `<i class="fas fa-hand-rock"></i>`;
        cpuResult.innerHTML = `<i class="fas fa-hand-rock"></i>`;

    }

    if(computerChoice === 2){
        insertCpuChoice.innerText = "Paper";
        cpuChoice.innerHTML = `<i class="fas fa-hand-paper"></i>`;
        cpuResult.innerHTML = `<i class="fas fa-hand-paper"></i>`;

    }

    if(computerChoice === 3){
        insertCpuChoice.innerText = "Scissors";
        cpuChoice.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
        cpuResult.innerHTML = `<i class="fas fa-hand-scissors"></i>`;

    }

    
}

function getResults(){
    if(playerChoice === computerChoice){
        result = 'Its a draw!';
        console.log(result);
        playerAdvise.innerText ="Draw";
        cpuAdvise.innerText = "Draw";
        playerCount += 1;
        cpuCount += 1;
        playerScore.innerText = playerCount;
        cpuScore.innerText = cpuCount;
        remaining.innerText = remainingAttempts - 1;
        console.log("Player Count: " + playerCount);
        console.log("Cpu count: " + cpuCount);
        remainingAttempts -= 1;
    }

    if(playerChoice == 2 && computerChoice == 1){ //player: Paper , cpu: Rock
        result = 'Player Win!';
        console.log(result);
        playerAdvise.innerText ="Win";
        cpuAdvise.innerText = "Lose";
        playerCount += 1;
        cpuCount += 0;
        playerScore.innerText = playerCount;
        cpuScore.innerText = cpuCount;
        remainingAttempts -= 1;

    }

    if(playerChoice == 3 && computerChoice == 1){ //player: Scissors, cpu: Rock
        result = 'Cpu Win!';
        console.log(result);
        playerAdvise.innerText ="Lose";
        cpuAdvise.innerText = "Win";
        playerCount += 0;
        cpuCount += 1;
        playerScore.innerText = playerCount;
        cpuScore.innerText = cpuCount;
        remainingAttempts -= 1;

    }
    
    if(playerChoice == 3 && computerChoice == 2){ //player: Scissors, cpu: Paper
        result = 'Player Win!';
        console.log(result);
        playerAdvise.innerText ="Win";
        cpuAdvise.innerText = "Lose";
        playerCount += 1;
        cpuCount += 0;
        playerScore.innerText = playerCount;
        cpuScore.innerText = cpuCount;
        remainingAttempts -= 1;

    }

    if(playerChoice == 1 && computerChoice == 2){ //player: Rock, cpu: Paper
        result = 'Cpu Win!';
        console.log(result);
        playerAdvise.innerText ="Lose";
        cpuAdvise.innerText = "Win";
        playerCount += 0;
        cpuCount += 1;
        playerScore.innerText = playerCount;
        cpuScore.innerText = cpuCount;
        remainingAttempts -= 1;

    }

    if(playerChoice == 1 && computerChoice == 3){ //player: Rock, cpu: Scissors
        result = 'Player Win!';
        console.log(result);
        playerAdvise.innerText ="Win";
        cpuAdvise.innerText = "Lose";
        playerCount += 1;
        cpuCount += 0;
        playerScore.innerText = playerCount;
        cpuScore.innerText = cpuCount;
        remainingAttempts -= 1;

    }

    if(playerChoice == 2 && computerChoice == 3){ //player: Paper, cpu: Scissors
        result = 'Cpu Win!';
        console.log(result);
        playerAdvise.innerText ="Lose";
        cpuAdvise.innerText = "Win";
        playerCount += 0;
        cpuCount += 1;
        playerScore.innerText = playerCount;
        cpuScore.innerText = cpuCount;
        remainingAttempts -= 1;

    }

    remaining.innerText = remainingAttempts;

    if (remainingAttempts === 0){
        //remainingAttempts = 10;
        //remaining.innerText= remainingAttempts;
        finish.innerText = "Game over!";

        if(remainingAttempts === 0){
            btn.classList.remove('display');
        }

        if(playerCount > cpuCount){
            winner.innerText = "You Win!"
        }
        if(playerCount < cpuCount){
            looser.innerText = "CPU Win!"
        }
        if(playerCount === cpuCount){
            draw.innerText = "It's a Draw!"
        }

        
    }

    reloadBtn.addEventListener('click', () =>{
        window.location.reload();
    })

    if (remainingAttempts < 0){
        remainingAttempts = 0;
        remaining.innerText= remainingAttempts;
        window.location.reload();
    }
    
    
}













 







