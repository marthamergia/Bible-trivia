const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonEl = document.getElementById('answer-buttons')

let shuffledQuestions
let currentQuestionIndex = 0

const questions = [
  {
    question: ,
    answer: [
      {text: },
      {text: },
      {text: }
    ],
    correctAnswer: ''
  },
  {
    question: ,
    answer: [
      {text: },
      {text: },
      {text: }
    ],
    correctAnswer: ''
  },
  {
    question: ,
    answer: [
      {text: },
      {text: },
      {text: }
    ],
    correctAnswer: ''
  },
  {
    question: ,
    answer: [
      {text: },
      {text: },
      {text: }
    ],
    correctAnswer: ''
  },
  {
    question: ,
    answer: [
      {text: },
      {text: },
      {text: }
    ],
    correctAnswer: ''
  },
  {
    question: ,
    answer: [
      {text: },
      {text: },
      {text: }
    ],
    correctAnswer: ''
  },
  {
    question: ,
    answer: [
      {text: },
      {text: },
      {text: }
    ],
    correctAnswer: ''
  },
  {
    question: ,
    answer: [
      {text: },
      {text: },
      {text: }
    ],
    correctAnswer: ''
  },
  {
    question: ,
    answer: [
      {text: },
      {text: },
      {text: }
    ],
    correctAnswer: ''
  },
  {
    question: ,
    answer: [
      {text: },
      {text: },
      {text: }
    ],
    correctAnswer: ''
  },
  
  
]

startButton.addEventListener('click', startGame)

function startGame() {
//   console.log('started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove('hide')
  setNextQuestion()
}
function setNextQuestion() {
  let currentQuestion = shuffledQuestions[currentQuestionIndex]
  showQuestion(currentQuestion)
  showAnswers(currentQuestion)
}

function showQuestion(question) {
  questionElement.innerText = question.question
}
function showAnswers(question) {
  let answers = question.answer
  for (let i = 0; i < answers.length; i++) {
    // console.log(answers[i].text)
    let btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = answers[i].text
    btn.addEventListener('click', () => {
      if (answers[i].text === question.correctAnswer) {
        currentQuestionIndex++
        answerButtonEl.innerHTML = ''
        setNextQuestion()
      } else {
        console.log('false')
      }
    })
    answerButtonEl.appendChild(btn)
  }
}
