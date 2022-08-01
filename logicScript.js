
let playerScore = 0;
let comScore = 0;
let comChoice;
function getComputerChoice(){
    let num;
    num = Math.floor(Math.random() * 3);
    
    switch(num) {
        case 0: return comChoice = "Rock";
        break;

        case 1: return comChoice =  "Paper";
        break;

        case 2: return comChoice =  "Scissors";
        break;
    }

   
}




function playRound(player,com){

 console.log(com);
    if(player == "rock" && com == "scissors" || player == "paper" && com == "rock" || player == "scissors" && com == "paper"){
        ++playerScore;
        return "player won!"
      
    } 
    else if(player == com){
        return "Tie!"
    }
    else {
        ++comScore;
        return "com won"
    }

 
}




function game(){

  const pScore = document.querySelector("#player-score");
  const cScore = document.querySelector("#com-score");
   pScore.innerHTML = playerScore;
   cScore.innerHTML = comScore;;
   cChoice.innerHTML = '"'+comChoice+'"';
}

let pChoice = document.querySelector(".pChoice");
let cChoice = document.querySelector(".cChoice");

const btns = document.querySelector(".btns");
btns.children[0].addEventListener("click", () => {
    
    playRound(btns.children[0].innerHTML.toLowerCase(),getComputerChoice().toLowerCase());
    game();
    pChoice.innerHTML = '"Rock!"';
});
btns.children[1].addEventListener("click", () => {
    
    playRound(btns.children[1].innerHTML.toLowerCase(),getComputerChoice().toLowerCase());
    game();
    pChoice.innerHTML = '"Paper!"';
});
btns.children[2].addEventListener("click", () => {
    
    playRound(btns.children[2].innerHTML.toLowerCase(),getComputerChoice().toLowerCase());
    game();
    pChoice.innerHTML = '"Scissors!"';
});








