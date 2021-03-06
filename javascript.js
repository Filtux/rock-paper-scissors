function computerPlay() {
    let textArray = ['Rock', 'Paper', 'Scissors']
    let randomIndex = Math.floor(Math.random() * textArray.length)
    return textArray[randomIndex]
}

function playRound(computerChoice, playerChoice) {

    if (computerChoice == 'Rock') {
        if (playerChoice == 'Rock') {
            computerPick.textContent = 'Computer chose: Rock'
            resultsContentScore.textContent = "It's a draw!"
            resultsContainer.appendChild(computerPick)
            resultsContainer.appendChild(resultsContentScore)
        }
        else if (playerChoice == 'Paper') {
            playerScore++
            computerPick.textContent = 'Computer chose: Rock'
            resultsContentScore.textContent = "You win! Paper beats Rock"
            resultsContainer.appendChild(computerPick)
            resultsContainer.appendChild(resultsContentScore)
        }
        else if (playerChoice == 'Scissors') {
            computerScore++
            computerPick.textContent = 'Computer chose: Rock'
            resultsContentScore.textContent = "You lose! Rock beats Scissors"
            resultsContainer.appendChild(computerPick)
            resultsContainer.appendChild(resultsContentScore)
        }
    }

    if (computerChoice == 'Paper') {
        if (playerChoice == 'Rock') {
            computerScore++
            computerPick.textContent = 'Computer chose: Paper'
            resultsContentScore.textContent = "You lose! Paper beats Rock"
            resultsContainer.appendChild(computerPick)
            resultsContainer.appendChild(resultsContentScore)
        }
        else if (playerChoice == 'Paper') {
            computerPick.textContent = 'Computer chose: Paper'
            resultsContentScore.textContent = "It's a draw!"
            resultsContainer.appendChild(computerPick)
            resultsContainer.appendChild(resultsContentScore)
        }
        else if (playerChoice == 'Scissors') {
            playerScore++
            computerPick.textContent = 'Computer chose: Paper'
            resultsContentScore.textContent = "You win! Scissors beats paper"
            resultsContainer.appendChild(computerPick)
            resultsContainer.appendChild(resultsContentScore)
        }
    }

    if (computerChoice == 'Scissors') {
        if (playerChoice == 'Rock') {
            playerScore++
            computerPick.textContent = 'Computer chose: Scissors'
            resultsContentScore.textContent = "You win! Rock beats Scissors"
            resultsContainer.appendChild(resultsContentScore)
        }
        else if (playerChoice == 'Paper') {
            computerScore++
            computerPick.textContent = 'Computer chose: Scissors'
            resultsContentScore.textContent = "You lose! Scissors beats paper"
            resultsContainer.appendChild(resultsContentScore)
        }
        else if (playerChoice == 'Scissors') {
            computerPick.textContent = 'Computer chose: Scissors'
            resultsContentScore.textContent = "It's a draw!"
            resultsContainer.appendChild(resultsContentScore)
        }
    }

    gamesPlayed ++

}

let gamesPlayed = 0;
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    playerChoice = 'Rock'
    playRound(computerPlay(), playerChoice)
    resultsContent.textContent = `You chose: ${playerChoice}`
    gamesPlayedVar.textContent = `Games played: ${gamesPlayed}`

    if (playerScore == 5 || computerScore == 5) {
        gamesPlayed = 0
        finalScores.textContent = `You: ${playerScore} | Computer: ${computerScore}`
        playerScore = 0
        computerScore = 0
}

})

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    playerChoice = 'Paper'
    playRound(computerPlay(), playerChoice)
    resultsContent.textContent = `You chose: ${playerChoice}`
    gamesPlayedVar.textContent = `Games played: ${gamesPlayed}`

    if (playerScore == 5 || computerScore == 5) {
        gamesPlayed = 0
        finalScores.textContent = `You: ${playerScore} | Computer: ${computerScore}`
        playerScore = 0
        computerScore = 0
}

})

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    playerChoice = 'Scissors'
    playRound(computerPlay(), playerChoice)
    resultsContent.textContent = `You chose: ${playerChoice}`
    gamesPlayedVar.textContent = `Games played: ${gamesPlayed}`

    if (playerScore == 5 || computerScore == 5) {
        gamesPlayed = 0
        finalScores.textContent = `You: ${playerScore} | Computer: ${computerScore}`
        playerScore = 0
        computerScore = 0
}

})

const container = document.querySelector(".container")
const resultsContainer = document.createElement("div")
const resultsContent = document.createElement('p')
const resultsContentScore = document.createElement('p')
const computerPick = document.createElement('p')
const gamesPlayedVar = document.createElement('p')
const finalScores = document.createElement('p')

resultsContainer.appendChild(resultsContent)
resultsContainer.appendChild(gamesPlayedVar)
resultsContainer.appendChild(finalScores)
container.appendChild(resultsContainer)