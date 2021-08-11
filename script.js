const headerEl = document.getElementById('header')

const textEl = document.getElementById('text')

const hideEl = document.querySelector('.hide')

const startButtonEl = document.getElementById('start-button')

const timerEl = document.querySelector('.timer')

const aList = document.createElement('ol')

const result = document.getElementById('result')

//  the answer buttons
const answerButton1 = document.createElement('button')
const answerButton2 = document.createElement('button')
const answerButton3 = document.createElement('button')
answerButton1.classList.add('answer-button', 'a')
answerButton2.classList.add('answer-button', 'b')
answerButton3.classList.add('answer-button', 'c')

// variable to store number of correct answers or user's score
var score = 0
// variable to set initial timer
let secondsRemaning = 75
// timer variable
var timerInterval
const questions = [
  {
    question: 'How many books are in the New Testament?',
    answers: {
      a: 24,
      b: 36,
      c: 27
    },
    correctAnswer: 'c'
  },

  {
    question: 'What type of insect did John the Baptist eat in the desert?',
    answers: {
      a: 'ants',
      b: 'locust',
      c: 'scorpions'
    },
    correctAnswer: 'b'
  },

  {
    question:
      'After Jesus was arrested, which apostle disowned him three times?',
    answers: {
      a: 'andrew',
      b: 'peter',
      c: 'judas'
    },
    correctAnswer: 'b'
  },

  {
    question:
      'Where did Mary and Joseph flee with the baby Jesus when an angel warned them Herod was trying to kill the child?',
    answers: {
      a: 'bethlehem',
      b: 'egypt',
      c: 'judah'
    },
    correctAnswer: 'b'
  },

  {
    question: 'Who asked Pilate for Jesus body after the crucifixion?',
    answers: {
      a: 'nicodemus',
      b: 'joseph',
      c: 'john'
    },
    correctAnswer: 'a'
  },

  {
    question: 'When did the events of the New Testament take place?',
    answers: {
      a: '3rd century',
      b: '1st century BC',
      c: '1st century AD'
    },
    correctAnswer: 'c'
  },

  {
    question:
      'Who was not present when the other apostles saw Jesus risen from the dead?',
    answers: {
      a: 'james',
      b: 'peter',
      c: 'thomas'
    },
    correctAnswer: 'c'
  },

  {
    question: 'What name did Jesus give to James & John?',
    answers: {
      a: 'sons of heaven',
      b: 'sons of thunder',
      c: 'sons of the sea'
    },
    correctAnswer: 'b'
  },

  {
    question:
      'What language were the books of the New Testament originally written in?',
    answers: {
      a: 'greek',
      b: 'latin',
      c: 'hebrew'
    },
    correctAnswer: 'a'
  },

  {
    question: 'Jesus healed the mother-in-law of which apostle?',
    answers: {
      a: 'john',
      b: 'matthew',
      c: 'peter'
    },
    correctAnswer: 'c'
  }
]
// current question array
let currentQuestion
let questionArray = []
let i = 0

function enterScore() {
  // clear timer
  clearInterval(timerInterval)
  timerEl.textContent = ''
//   console.log('GAME OVER')
  // print 'Game Over!'
  headerEl.textContent = 'Game Over!'
  // print the score to the page
  divEl = document.createElement('div')
  scoreEl = document.createElement('score')
  scoreEl.textContent = `Final Score: ${score}`
  headerEl.appendChild(divEl)
  divEl.appendChild(scoreEl)
//   hideEl.classList.add('hide')
  
}
// timer
function timer() {
  timerInterval = setInterval(function () {
    // decrement seconds left
    secondsRemaning--
    timerEl.textContent = 'Timer: ' + secondsRemaning
    
   //if secondsRemaining == 0, stop the game and clear the timer
    if (secondsRemaning == 0) {
        clearInterval(timerInterval)
        timerEl.textContent = 'Timer: ' + secondsRemaning
        enterScore()
    }
}, 1000)
}

// question generator/ game start
function gamestart() {
  // hide start button
//   hideEl.classList.add('hide')
  
  timer()

  // shuffle the question order
  questions.sort(() => Math.random() - 0.5)
//   console.log( "theQuestions", questions)
  // store the current question
  currentQuestion = questions[i]

  // ask a question
  questionAsker()
}

// populate the page with a question
questionAsker = () => {
  if (questionArray.length >= questions.length || secondsRemaning == 0) {
    enterScore()
  } else {
    // append the list to be populated to the textEl
    

    // store current question
    currentQuestion = questions[i]
    // store questions into an array to check when there are no more questions to ask
    questionArray.push(questions[i])
    // render the question to the page
    headerEl.innerHTML = questions[i].question
    // set each list item text to the answer's text
    answerButton1.innerHTML = questions[i].answers.a
    answerButton2.innerHTML = questions[i].answers.b
    answerButton3.innerHTML = questions[i].answers.c

    textEl.replaceWith(aList)
    
    //render each answer to the list
    aList.appendChild(answerButton1)
    aList.appendChild(answerButton2)
    aList.appendChild(answerButton3)
    
    // console.log('value of i: ', i)
    console.log('CURRENT a: ', aList)
  }
}

//EVENT LISTENERS

// on page load, populate start button and quiz info
addEventListener('load', () => {
  // if the header element exists on the page...
  if (headerEl) {
    // ...populate header
    headerEl.textContent = 'Welcome to Bible Trivia'
  }
  // if text element exists on the page...
  if (textEl) {
    // ...populate the rules text
    textEl.innerHTML =
      'You have 75 seconds to complete the quiz. If you get any question wrong you will minimize your remaining time by 10 seconds. Good luck!'
  }
  // if hide element exists on the page...
  if (hideEl) {
    // ...show the start button
    hideEl.classList.remove('hide')
  }
})

// bind listener to class name for button nested in body
// listen for click in body on class name
document.addEventListener('click', function (e) {
  // if the button clicked is an answer button,
  if (e.target.classList.contains('answer-button')) {
    // console.log('answer buttons work')
    if (e.target.classList.contains(currentQuestion.correctAnswer)) {
    //   console.log('CORRECT ANSWER WORKING')
      // add one to score
      score++
      if (result.classList.contains('wrong')) {
        // clear class list from result
        result.classList.remove('wrong')
      }
      // render 'correct!' to screen
      result.textContent = 'Correct!'
      // erase message after 1.5 seconds
      setTimeout(function () {
        result.textContent = ''
      }, 1000)
      // increment question index
      i++
      // ask next quesiton
      questionAsker()
    } else {
    //   console.log('WRONG ANSWER WORKING')
      // for a wrong answer, take 10 seconds off the clock
      secondsRemaning -= 10
      
      result.textContent = 'Wrong!'
      // erase message after 1.5 seconds
      setTimeout(function () {
        result.textContent = ''
      }, 1000)
      //icrement question index
      i++
      //ask next question
      questionAsker()
    }
  }
})

// if start button el exists on page...
if (startButtonEl) {
//   // ...on button click start quiz
  startButtonEl.addEventListener('click', gamestart)
}
