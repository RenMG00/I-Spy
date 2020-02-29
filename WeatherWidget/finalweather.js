var weatherData;
var request = new XMLHttpRequest();
var date = new Date();

loadData();

function loadData() {
    // change API key
    request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Salt+Lake+City,us&units=imperial&cnt=5&appid=846d3b48355b6e95813bed8fb29f0fb3');
    request.onload = loadComplete;
    request.send();
}
function loadComplete() {
    weatherData = JSON.parse(request.responseText);
    console.log(weatherData);

    for(index in weatherData.list){
        const individualDayForecast = weatherData.list[index];
        loadDifferentDay(individualDayForecast, index);
        date.setDate(date.getDate() + 1);
    }
}


function loadDifferentDay(individualDayForecast, dayIndex) {
    var iconcode = individualDayForecast.weather[0].icon;
    var icon_path = "https://openweathermap.org/img/w/" + iconcode +".png";
    document.getElementById("icon" + dayIndex).src = icon_path;
    document.getElementById("place" + dayIndex).innerHTML = weatherData.city.name;
    document.getElementById("day" + dayIndex).innerHTML = (date.getMonth()+1) + "/" + date.getDate();
    document.getElementById("currentTemp" + dayIndex).innerHTML = weatherData.list[dayIndex].temp.day;
    document.getElementById("conditions" + dayIndex ).innerHTML = weatherData.list[dayIndex].weather[0].main;
    document.getElementById("conditionsDesc" + dayIndex).innerHTML = weatherData.list[dayIndex].weather[0].description;  
}

function onMouseOver(evt) {
    evt.currentTarget.innerHTML = "Bring a coat!";
}

function onMouseOut(evt) {
    evt.currentTarget.innerHTML = "Clouds";
}
document.getElementById("conditions0").addEventListener("mouseover", onMouseOver);
document.getElementById("conditions0").addEventListener("mouseout", onMouseOut);
document.getElementById("conditions1").addEventListener("mouseover", onMouseOver);
document.getElementById("conditions1").addEventListener("mouseout", onMouseOut);
document.getElementById("conditions4").addEventListener("mouseover", onMouseOver);
document.getElementById("conditions4").addEventListener("mouseout", onMouseOut);


function onMouseOver2(evt) {
    evt.currentTarget.innerHTML = "Grab an umbrella";
}

function onMouseOut2(evt) {
    evt.currentTarget.innerHTML = "Rain";
}

document.getElementById("conditions2").addEventListener("mouseover", onMouseOver2);
document.getElementById("conditions2").addEventListener("mouseout", onMouseOut2);

function onMouseOver3(evt) {
    evt.currentTarget.innerHTML = "Bundle up!";
}

function onMouseOut3(evt) {
    evt.currentTarget.innerHTML = "Snow";
}

document.getElementById("conditions3").addEventListener("mouseover", onMouseOver3);
document.getElementById("conditions3").addEventListener("mouseout", onMouseOut3);



//function onMouseOver(evt) {
  //  evt.currentTarget.innerHTML = "Hats, gloves and Scarf!";
//}

//function onMouseOut(evt) {
   // evt.currentTarget.innerHTML = "snow";
//}

//document.getElementById("conditionsDesc3").addEventListener("mouseover", onMouseOver);
//document.getElementById("conditionsDesc3").addEventListener("mouseout", onMouseOut);



//function onMouseOver(evt) {
    //evt.currentTarget.innerHTML = "Sunglasses just incase!";
//}

//function onMouseOut(evt) {
  //  evt.currentTarget.innerHTML = "few clouds";
//}

//document.getElementById("conditionsDesc4").addEventListener("mouseover", onMouseOver);
//document.getElementById("conditionsDesc4").addEventListener("mouseout", onMouseOut);




 

