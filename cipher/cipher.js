let resultTextArea = document.getElementById("cipherResultTextArea");

function handleFormSubmit(cipherForm) {
    console.log("handleform.click");

    let inputValue = cipherForm.input.value;
    let cipherResult = rot13(inputValue);
    resultTextArea.value = cipherResult;
}   
function rot13(str){
    var arr = [];
    for (let i=0; i<=str.length; i++) {
        let invididualChar = str.charCodeAt(i);
        if(isNaN(invididualChar)){
            arr.push(str[i]);
        }else if (invididualChar >= 65 && invididualChar <= 77) {
            arr.push(String.fromCharCode(invididualChar + 13)); }
        
        else if (invididualChar >= 78 && invididualChar <= 90) {
            arr.push(String.fromCharCode(invididualChar - 13));
        }
        else if (invididualChar < 65){
            arr.push(str[i]);
        } else {
            throw new Error("Failed to determine what to do with this char: " + invididualChar);
        }
    }
    return (arr.join(""));
}