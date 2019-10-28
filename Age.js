// Removed button
let resultsContainer = document.getElementById('myResult')
let h3 = document.createElement('h3')
resultsContainer.appendChild(h3)

myInput.addEventListener('keyup', () => {
	let myInputValue = document.getElementById('myInput').value
	
	console.log(myInputValue)

 if (isNaN(myInputValue)) {
	h3.textContent = 'Not a number'
	console.log('Not a number!')
 } else {
 	if (myInputValue > 27) {
		h3.textContent = 'You are older!'
		console.log('Older')
	} else if (myInputValue < 27) {
		h3.textContent = 'You are younger!'
		console.log('Younger')
    } else {
        h3.textContent = 'We are the same age.'
        console.log('Same Age')
    }
  }

});
 