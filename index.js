let humanScore = 0
let compScore = 0




function getComputerChoice(){
  
  const random = Math.floor(Math.random()*3)+1

  if(random === 1){
    return "rock"
  }else if(random === 2){
    return "paper"

  }else if(random === 3){
    return "scissors"
  }

}



function getHumanChoice(){
  const humanInput = prompt("Enter your choice").toLowerCase().toString()

  if(humanInput){
    return humanInput

  }



}

getHumanChoice()
const humanSelect = getHumanChoice()
const computerSelect = getComputerChoice()
console.log(computerSelect)
console.log(humanSelect)