


function getComputerChoice(){
    let num;
    num = Math.floor(Math.random() * 3);
    let choice;
    switch(num) {
        case 0: return"rock";
        break;

        case 1: return "paper";
        break;

        case 2: return  "scissor";
        break;
    }

    
}

console.log(getComputerChoice())
