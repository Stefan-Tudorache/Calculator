
const calculate = () => {

  const inputOne = document.querySelector("#firstNumber").value;
  const inputTwo = document.querySelector("#secondNumber").value;

  const numberOne = parseInt(inputOne);
  const numberTwo = parseInt(inputTwo);

  const operator = document.querySelector('#operator').value;
  const pTag = document.querySelector("#result");


  if (isNaN(numberOne) || isNaN(numberTwo)) {
    pTag.innerHTML = "You Broke it !";
    alert("You Broke It !!! Please enter a number or a correct operator in the input boxes.")

  } else if (operator === "+") {
    pTag.innerHTML = numberOne + numberTwo;

  } else if (operator === "-") {
    pTag.innerHTML = numberOne - numberTwo;

  } else if (operator === "*") {
    pTag.innerHTML = numberOne * numberTwo;

  } else if (operator === "/") {
    pTag.innerHTML = numberOne / numberTwo;

  } else if (operator === "**") {
    pTag.innerHTML = numberOne ** numberTwo;

  } else {
    pTag.innerHTML = "You Broke it !";
    alert("You Broke It !!! Please enter a number or a correct operator in the input boxes.")
  }
}



const reset = () => {

  const inputOne = document.querySelector("#firstNumber");
  const inputTwo = document.querySelector("#secondNumber");

  const operator = document.querySelector('#operator');
  const pTag = document.querySelector("#result");

  inputOne.value = " ";
  inputTwo.value = " ";
  operator.value = " ";
  pTag.innerHTML = "Let's do it again!"
}

document.querySelector("#calculate").addEventListener("click", calculate);

document.querySelector("#reset").addEventListener("click", reset);






