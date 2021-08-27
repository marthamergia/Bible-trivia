const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonEl = document.getElementById('answer-buttons')
const theH3 = document.getElementById('myH3')

let shuffledQuestions
let currentQuestionIndex = 0
let score = 0

const questions = [
  {
    question: 'How many books are in the New Testament?',
    answer: [{ text: '24' }, { text: '36' }, { text: '27' }],
    correctAnswer: '27'
  },
  {
    question: 'What type of insect did John the Baptist eat in the desert?',
    answer: [{ text: 'Ants' }, { text: 'Locust' }, { text: 'Scorpions' }],
    correctAnswer: 'Locust'
  },
  {
    question:
      'After Jesus was arrested, which apostle disowned him three times?',
    answer: [{ text: 'Peter' }, { text: 'John' }, { text: 'Judah' }],
    correctAnswer: 'Peter'
  },
  {
    question:
      'Where did Mary and Joseph flee with the baby Jesus when an angel warned them Herod was trying to kill the child?',
    answer: [{ text: 'Bethelhem' }, { text: 'Nazreth' }, { text: 'Egypt' }],
    correctAnswer: 'Egypt'
  },
  {
    question: 'Who asked Pilate for Jesus body after the crucifixion?',
    answer: [{ text: 'Nicodemus' }, { text: 'Joseph' }, { text: 'Mary' }],
    correctAnswer: 'Joseph'
  },
  {
    question: 'When did the events of the New Testament take place?',
    answer: [
      { text: '2nd century AD' },
      { text: '1st century BC' },
      { text: '1st century AD' }
    ],
    correctAnswer: '1st century AD'
  },
  {
    question:
      'Who was not present when the other apostles saw Jesus risen from the dead?',
    answer: [{ text: 'Thomas' }, { text: 'Mathew' }, { text: 'James' }],
    correctAnswer: 'Thomas'
  },
  {
    question: 'What name did Jesus give to James & John',
    answer: [
      { text: 'Sons of the sea' },
      { text: 'Sons of the sun' },
      { text: 'Sons of thunder' }
    ],
    correctAnswer: 'Sons of thunder'
  },
  {
    question:
      'What language were the books of the New Testament originally written in?',
    answer: [{ text: 'Hebrew' }, { text: 'Greek' }, { text: 'Roman' }],
    correctAnswer: 'Greek'
  },
  {
    question: 'Jesus healed the mother-in-law of which apostle?',
    answer: [{ text: 'Peter' }, { text: 'John' }, { text: 'Mathew' }],
    correctAnswer: 'Peter'
  }
]

startButton.addEventListener('click', startGame)

//Game starts here
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  score = 0
  questionContainerEl.classList.remove('hide')
  setNextQuestion()
}

//set next question
function setNextQuestion() {
  if (currentQuestionIndex >= questions.length) {
    questionElement.innerHTML = `GAME OVER! YOU HAD ${score} CORRECT ANSWERS!`
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  let currentQuestion = shuffledQuestions[currentQuestionIndex]
  theH3.innerText = ''
  answerButtonEl.innerHTML = ''
  document.body.style.background = 'rgb(255, 99, 71)'
  showQuestion(currentQuestion)
  showAnswers(currentQuestion)
}

//Render question
function showQuestion(question) {
  questionElement.innerText = question.question
}

//Game logic
function showAnswers(question) {
  let answers = question.answer
  for (let i = 0; i < answers.length; i++) {
    let btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = answers[i].text
    btn.addEventListener('click', () => {
      currentQuestionIndex++
      if (answers[i].text === question.correctAnswer) {
        score++
        document.body.style.background = 'green'
        theH3.innerText = 'Correct! Good job'
        setTimeout(setNextQuestion, 1000)
      } else {
        theH3.innerText = 'Not Correct!'
        document.body.style.background = 'red'
        setTimeout(setNextQuestion, 1000)
      }
    })
    answerButtonEl.appendChild(btn)
  }
}
