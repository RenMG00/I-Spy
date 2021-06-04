let triviaData;
let request = new XMLHttpRequest();
let selection;
let amount;
let category;
let form;
let radio;
let span;
let brake;
let button;
let counter = 0;
let correctAnswerIndice;
const putTriviaHere = document.getElementById('putTriviaHere')
let pointContainer = document.getElementById('pointContainer')

document.trivForm.addEventListener('submit', event => {
    event.preventDefault()
    category = document.trivForm.category.value
    var diffInputs = document.getElementsByName('difficulty');
    diffInputs.forEach(i => {
        if (i.checked) {
            console.log(i.value)
            selection = i.value;
        }
    })
    loadData();
    document.getElementById('hideMe').style.display = "none";

});

function loadData() {

    var url = `https://opentdb.com/api.php?amount=${amount || 3}${category ? `&category=${category}` : ''}&difficulty=${selection || 'hard'}`;
    console.log(url);
    request.open('GET', url);
    request.onload = loadComplete;
    request.send();

};

function loadComplete() {
    triviaData = JSON.parse(request.responseText);
    console.log(triviaData);
    console.log('testing results')
    console.log(triviaData.results[0])
    spawnQuestion(triviaData.results[counter], 0)
};

function spawnQuestion(apiResults, index) {
    counter++;
    form = document.getElementById('form')
    const { category, difficulty, question, correct_answer, incorrect_answers } = apiResults
    const container = document.createElement('div')
    container.classList = 'myContainer'
    const questionContainer = document.createElement('div')
    questionContainer.innerHTML = question
    const answersContainer = document.createElement('div')
    button = document.createElement('button')
    button.innerText = 'Guess'
    container.appendChild(questionContainer)
    form.appendChild(answersContainer)
    const answersArray = [...incorrect_answers, correct_answer]

    function shuffle(arr) {
        arr.sort(() => Math.random() - 0.5)
    }

    shuffle(answersArray)
    correctAnswerIndice = answersArray.indexOf(correct_answer)

    for (let i = 0; i < answersArray.length; i++) {

        radio = document.createElement('input')
        span = document.createElement('span')
        brake = document.createElement('br')
        radio.type = "radio"
        radio.name = "radioSelect"
        radio.value = answersArray[i]
        span.innerText = answersArray[i]
        answersContainer.appendChild(radio)
        answersContainer.appendChild(span)
        answersContainer.appendChild(brake)
    }

    answersContainer.appendChild(button)
    container.appendChild(answersContainer)
    putTriviaHere.appendChild(container)

    form.addEventListener('submit', event => {

        event.preventDefault()
        console.log('radio')
        var answerInputs = document.getElementsByName('radioSelect')
        answerInputs.forEach(i => {
            if (i.checked) {
                console.log(i.value)
                answerInputs = i.value;
            }
        })
        if (answerInputs === correct_answer) {
            alert('Correct!')
            answersContainer.style.display = "none";
            console.log(triviaData.results[1])
            spawnQuestion(triviaData.results[counter], 1)
        }
    })

}

