    var userFirst = document.getElementById('first').value;
    var userLast = document.getElementById('last').value;
    var userAge = document.getElementById('age').value;
    var userGrade = document.getElementById('grade');

function sendData(myForm) {
    var formInfo = document.getElementById('myForm').value;
    var selectArray = formInfo.getelementsByTagName('option');
    
 if (userFirst == String) {
        console.log (userFirst);
    } else if (userFirst == "") {
        alert("Please do not leave blank.")
    } else if (userFirst == number) {
       alert("Only enter name!")
    }
 if (userLast == String) {
     console.log(userLast);
 } else if (userLast == "") {
     alert("Please do not leave blank.")
 } else if (userLast == number) {
    alert("Only enter name!")
 }
 if (userAge == Number) {
     console.log (userAge);
 } else {
     alert("Please enter a valid age.")
 }
 if (selectArray == K) {
    alert("You are too young to participate!")
 } else if (selectArray == "12th") {
     alert("You are too old to participate")
 }

}

function formValidation (sendData) {
  // unsure of correct input
    if () {
    return (true);  
  } else {
    throw new Error("Please try again.");
      
  }
   
}


