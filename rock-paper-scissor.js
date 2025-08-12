// rock scissor paper game starts from here
let userChoice = 0;
let compChoice = 0;

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) =>{
    choice.addEventListener('click', () =>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});
const playGame = (userChoice) =>{
    const compChoice= genCompChoice();

    if(userChoice === compChoice){
        //draw scenario
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
        //paper, scissor
        userWin = (compChoice==="paper")? false : true;
        }
        else if(userChoice === "rock"){
        userWin = (compChoice === "scissors")? false : true;  
        }else{
        userWin = (compChoice==="paper")? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const genCompChoice = () =>{
    const options= ["rock", "paper", "scissors"]
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game Draw, try again";
     msg.style.background = "blue"
}
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you Win! your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}` ;
         msg.style.background = "red"
    }
}
