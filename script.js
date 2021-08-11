const quizContainer = document.getElementsByClassName('quiz')
const resultContainer = document.getElementsByClassName('results')
const submitButton = document.getElementsByClassName('submit')

function buildQuiz() {}
function showResult() {}

//display quiz on page load
buildQuiz()

//on submit, show results
submitButton.addvEventListner('click', showResult)

const myQuestions = [
    {
        question: "How many books are in the New Testament?",
        answers: {
            a: 24,
            b: 36,
            c: 27

        },
        correctAnswer: "c"
    },

    {
        question:"What type of insect did John the Baptist eat in the desert?",
        answers: {
            a: "ants",
            b: "locust",
            c: "scorpions"
        },
        correctAnswer: "b"
    },

    {
        question:"After Jesus was arrested, which apostle disowned him three times?",
        answers: {
            a: "andrew",
            b: "peter",
            c: "judas"
        },
        correctAnswer: "b"
    },

    {
        question:"Where did Mary and Joseph flee with the baby Jesus when an angel warned them Herod was trying to kill the child?",
        answers: {
            a: "bethlehem",
            b: "egypt",
            c: "judah"
        },
        correctAnswer: "b"
    },

    {
        question:"Who asked Pilate for Jesus body after the crucifixion?",
        answers: {
            a: "nicodemus",
            b: "joseph",
            c: "john"
        },
        correctAnswer: "a"
    },

    {
        question:"When did the events of the New Testament take place?",
        answers: {
            a: "3rd century",
            b: "1st century BC",
            c: "1st century AD"
        },
        correctAnswer: "c"
    },

    {
        question:"Who was not present when the other apostles saw Jesus risen from the dead?",
        answers: {
            a: "james",
            b: "peter",
            c: "thomas"
        },
        correctAnswer: "c"
    },

    {
        question:"What name did Jesus give to James & John?",
        answers: {
            a: "sons of heaven",
            b: "sons of thunder",
            c: "sons of the sea"
        },
        correctAnswer: "b"
    },

    {
        question:"What language were the books of the New Testament originally written in?",
        answers: {
            a: "greek",
            b: "latin",
            c: "hebrew"
        },
        correctAnswer: "a"
    },

    {
        question:"Jesus healed the mother-in-law of which apostle?",
        answers: {
            a: "john",
            b: "matthew",
            c: "peter"
        },
        correctAnswer: "c"
    },

]

function buildQuiz() {
    const output = []
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = []

            for(letter in currentQuestion.answers) {
                answers.push(
                    <lable>
                    
                    </lable>
                )
            }
        }
    )
}
