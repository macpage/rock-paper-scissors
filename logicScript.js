
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
   cChoice.innerHTML = '"'+comChoice+'!"';
    let rnd = Math.floor(Math.random()*24)
   quote.innerHTML = quotes[rnd];
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




let quote = document.querySelector(".quote");

let quotes = [
    '"If you wanna fix me, then let\'s break up here and now."',
    '"I don\'t need a Ken."',
    '"Chillin like a villain."',
    '"Bring out your boss bish."',
    '"My life\'s been magic."',
    '"One of a kind."',
    '"We ride or die."',
    '"Being the greatest of all time ain\'t fantasy."',
    '"When the bass drop, it\'s another banger."',
    '"I don\'t know what to do without you."',
    '"Nineties\' baby, I pump up the jam."',
    '"Never needed nothin\' else, just a lil\' love from myself."',
    '"You\'re sittin\' on your feelings, I\'m sittin\' on my throne."',
    '"Look up in the sky, it\'s a bird, it\'s a plane."',
    '"Tired of hearin\' sorry."',
    '"This don\'t feel like home."',
    '"A prince not even on my list."',
    '"This beat got me feelin\' like."',
    '"Aye but I don\'t play with them fakes, keep it real with me."',
    '"Girls wanna have some fun."',
    '"It\'s the end of the month and the weekend."',
    '"Only thing I think about is big stacks."',
    '"I went crazy over you."',
    '"You\'ll never know unless you walk in my shoes."'


    


];