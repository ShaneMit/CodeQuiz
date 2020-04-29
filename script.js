const startButton = document.getElementById('startBtn')
startButton.addEventListener('click', startQuiz)

// Make quiz start
function startQuiz() {
  console.log('Start')

}

function nextQuestion () {

}

// Array for questions
const questions = [
  {
    question: 'Filler text for question1 ?'
    answers: [
      {text: 'a', correct: true},
      {text: 'b', correct: false},
      
        
    ]
  }
]