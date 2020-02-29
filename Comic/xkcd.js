
var request = new XMLHttpRequest();
var secondRequest = new XMLHttpRequest();
var currentComic;
let myButton = document.getElementById('myButton');
let inputNumber = document.getElementById('inputNumber');
var otherComic;

loadData();

function loadData() {
    
    request.open('GET', 'https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    currentComic = JSON.parse(request.responseText);
    document.getElementById('hotel').src = "hotel.png";
    console.log(currentComic);
    document.getElementById('titletext').innerText = currentComic.title;
    document.getElementById('publishdate').innerText = "publish date: "+ currentComic.month + "-" + currentComic.day + "-" + currentComic.year;
}

myButton.addEventListener('click', ()=> {
    loadAdditionalData();
})

function loadAdditionalData() {
    let maxNum = currentComic.num;
    if (inputNumber.value > maxNum) {
        throw "Must be less than" + maxNum;
    }
    secondRequest.open('GET', 'https://cors-anywhere.herokuapp.com/https://xkcd.com/'+inputNumber.value+'/info.0.json');
    secondRequest.onload = loadAdditionalComplete;
    secondRequest.send();
}

function loadAdditionalComplete(evt) {
    otherComic = JSON.parse(secondRequest.responseText);
    console.log(otherComic);
    document.getElementById('titletext').innerText = otherComic.title;
    document.getElementById('publishdate').innerText = "publish date: "+ otherComic.month + "-" + otherComic.day + "-" + otherComic.year;
}
