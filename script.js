
    stage = document.getElementById('stage'),
    startButton = document.getElementById('startButton'),
    title = document.getElementById('title'),
    questionTitle = document.getElementsByClassName('questions'),
    score = document.getElementsByClassName('score'),
    scoreSpan = score[0].getElementsByTagName('span'),
    timer = document.getElementsByClassName('timer'),
    timerSpan = timer[0].getElementsByTagName('span'),
    gameChoices = document.getElementById('gameChoices'),
    gameHeader = document.getElementById('gameHeader'),
    buttonOne = document.getElementById('buttonOne'),
    buttonTwo = document.getElementById('buttonTwo'),
    buttonThree = document.getElementById('buttonThree'),
    buttonFour = document.getElementById('buttonFour'),
    buttonArray = [buttonOne, buttonTwo, buttonThree, buttonFour],
    modal_window = document.getElementById('modal_window')

 
    (gameIndex = 0),
    (actualScore = 0),
    (timerIndex = 8),
    (runningGameAgain = false),
    (timerObject = undefined),
    (gameQuestions = []),
    