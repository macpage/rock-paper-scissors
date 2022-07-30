


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
        return "player won!"
    } 
    else if(player == com){
        return "Tie!"
    }
    else {
        return "com won"
    }

   
}

console.log(playRound(prompt(),getComputerChoice()));



