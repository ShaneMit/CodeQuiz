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
    question: 'Filler text for question1?'
    answers: [
      {text: 'a', correct: true},
      {text: 'b', correct: false},
      {text: 'c', correct: false},
      {text: 'd', correct: false}
    ]
  }
    {
    question: 'Filler text for question2?'
    answers: [
      { text: 'a', correct: false },
      { text: 'b', correct: false },
      { text: 'c', correct: true },
      { text: 'd', correct: false }
    ]
  }
    {
    question: 'Filler text for question3?'
    answers: [
      { text: 'a', correct: false },
      { text: 'b', correct: false },
      { text: 'c', correct: false },
      { text: 'd', correct: true }
    ]
  }
    {
    question: 'Filler text for question4?'
    answers: [
      { text: 'a', correct: false },
      { text: 'b', correct: true },
      { text: 'c', correct: false },
      { text: 'd', correct: false }
    ]
  }
]