
let playerScore = 0;
let comScore = 0;

function getComputerChoice(){
    let num;
    num = Math.floor(Math.random() * 3);
    
    switch(num) {
        case 0: return"rock";
        break;

        case 1: return "paper";
        break;

        case 2: return  "scissor";
        break;
    }

   
}




function playRound(player,com){

 console.log(com);
    if(player == "rock" && com == "scissor" || player == "paper" && com == "rock" || player == "scissor" && com == "paper"){
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


}

console.log(game());



