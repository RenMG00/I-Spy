// Changed the name of the button element and put other variables in the code block
let button = document.getElementById('myButton');
let resultsContainer = document.getElementById('myResult')
let h3 = document.createElement('h3')
resultsContainer.appendChild(h3)

button.addEventListener('click', () => {
	let myInputValue = document.getElementById('myInput').value
	
	console.log(myInputValue)

 if (isNaN(myInputValue)) {
	h3.textContent = 'Not a number'
	console.log('Not a number!')
 } else {
 	if (myInputValue % 2 === 0) {
		h3.textContent = 'This is even'
		console.log('even')
	} else {
		h3.textContent = 'This is odd'
		console.log('odd')
 	}
 }

});
 