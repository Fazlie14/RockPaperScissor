let humanScore = 0
let compScore = 0




function getComputerChoice(){
  
  const random = Math.floor(Math.random()*3)+1
  let message = ""

  if(random === 1){
    return message = "rock"
  }else if(random === 2){
    return message = "paper"

  }else if(random === 3){
    return message = "scissors"
  }

}



function getHumanChoice(){
  const humanInput = prompt("Enter your choice").toLowerCase().toString()

  if(humanInput){
    return humanInput

  }



}

function playRound(humanChoice, computerChoice){
  let message = ""


  if(humanChoice === computerChoice){
    console.log(message = `Tied`)
    return;
  }
    if((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")){
      console.log(message = `${humanChoice} beats ${computerChoice}`)
      humanScore++
      return;

    }else{ 
          console.log(message = `${computerChoice} beats ${humanChoice}`)
          compScore++
          return


    }


  

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);