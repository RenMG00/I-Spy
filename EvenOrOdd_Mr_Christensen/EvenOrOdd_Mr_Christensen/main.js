let myInputElement = document.getElementById("myInput");
let myButtonElement = document.getElementById("myButton");
let myResultElement = document.getElementById("myResult");

myButtonElement.addEventListener("click", ()=>{
    myResultElement.innerHTML = "You typed: "+myInputElement.value;
});