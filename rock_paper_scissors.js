const computerChoiceDispaly = document.getElementById('computer-choice')
const userChoiceDislay = document.getElementById('user-choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userChoice = e.target.id
    userChoiceDislay.innerHTML = userChoice

    generateComputerChoice()
    getResult()
    
}))

function generateComputerChoice(){
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDispaly.innerHTML = computerChoice
}

function getResult(){

    switch (userChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        result.innerHTML = "YOU WIN!"
        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        result.innerHTML = "YOU LOSE!"
        break
      case 'paperpaper':
      case 'scissorsscissors':
      case 'rockrock':
      result.innerHTML = "ITS A DRAW!"
      break
    }
  }