function validate(userInput) {
  console.log(userInput);

  if ((userInput === "") || (userInput === "")) {
    window.alert("Please enter text before submitting");
    return false;
  }
  if (userInput.length > 20) {
    window.alert("Text can'/t exceed more then 20 characters");
    return false;
  }
  if (userInput === "Bobby") {
    window.alert("Bobby shall not pass");
    return false;
  }

  return true

  // userInput is the message that is entered in the text field
  // use window.alert("Message") to output errors
  // return true when no error occurs
  // return false if an error occurs

  //Check that the field userInput is filled

}

// -------------------------------------------------------------------------------
// DON'T CHANGE ANYTHING BELOW THIS LINE!
// -------------------------------------------------------------------------------



function submitFunction() {
  validate(document.getElementById("emailInput").value);
}

document.getElementById("submit-btn").addEventListener("click", function(event) {
  event.preventDefault()
});
