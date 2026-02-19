
function playGame(){
  let humanScore = 0
  let compScore = 0

  
function getComputerChoice(){
  
  
  const choices = ["rock","paper", "scissors"]
  const random = Math.floor(Math.random()*3)

  return choices[random]
}

function getHumanChoice(){
  const humanInput = prompt("Enter your choice").toLowerCase().toString()

    return humanInput

}



  function playRound(humanChoice, computerChoice){
    let message = ""
  
  
    if(humanChoice === computerChoice){
      return message = `Tied`
    }
      if((humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")){
        message = `${humanChoice} beats ${computerChoice} human win!`
        humanScore++

        return message
  
      }else{ 
            message = `${computerChoice} beats ${humanChoice} computer win!`
            compScore++
             return message
  
     }
  
  }
  


  for(let i = 1; i <= 5; i++){
    let message = `round ${i}`
    console.log(message)
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    const startRound = playRound(humanSelection, computerSelection);
    console.log(startRound)
   
  }

console.log(`Human Score: ${humanScore}`)
console.log(`Computer Score: ${compScore} `)

  
  if (humanScore > compScore) {
    console.log("🎉 Human win the game!");
  } else if (compScore > humanScore) {
    console.log("💻 Computer wins the game!");
  } else {
    console.log("🤝 The game is tied!");
  }



}

const startGame = playGame()



