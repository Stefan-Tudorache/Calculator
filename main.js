// Variables
  const inputOne = document.querySelector("#firstNumber");
  const inputTwo = document.querySelector("#secondNumber");

  const operator = document.querySelector('#operator');
  const pTag = document.querySelector("#result");

//Calculate function
const calculate = () => {

  const numberOne = parseInt(inputOne.value);
  const numberTwo = parseInt(inputTwo.value);

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    pTag.innerHTML = "You Broke it !";
    alert("You Broke It !!! Please enter a number or a correct operator in the input boxes.");

  } else if (operator.value === "+") {
    pTag.innerHTML = numberOne + numberTwo;

  } else if (operator.value === "-") {
    pTag.innerHTML = numberOne - numberTwo;

  } else if (operator.value === "*") {
    pTag.innerHTML = numberOne * numberTwo;

  } else if (operator.value === "/") {
    pTag.innerHTML = numberOne / numberTwo;

  } else if (operator.value === "**") {
    pTag.innerHTML = numberOne ** numberTwo;
    
  }  else {
    pTag.innerHTML = "You Broke it !";
    alert("You Broke It !!! Please enter a number or a correct operator in the input boxes.");   
  }
}

//Calling function on click event
document.querySelector("#calculate").addEventListener("click", calculate);

//Reset function for inputs and result
const reset = () => {

  inputOne.value = "";
  inputTwo.value = "";
  operator.value = "";
  pTag.innerHTML = "Let's do it again!"

}

//Calling function on click event
document.querySelector("#reset").addEventListener("click", reset);






