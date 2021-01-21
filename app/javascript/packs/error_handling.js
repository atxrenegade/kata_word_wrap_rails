// client side user input validations
console.log("loaded");

const colInput = document.getElementById('col_num');
const userStr = document.getElementById('user_str');
const errDiv = document.getElementById('errors');

colInput.addEventListener('keyup', handleNumErrs);
userStr.addEventListener('keyup', handleStrErrs);

// check user input num for positive int
// add or remove error message to/from the DOM
function handleNumErrs() {
  const intErr = document.getElementById('intErr');
  if (isPositiveInteger(parseInt(colInput.value, 10)) != true && intErr == undefined) {
    const intErr = document.createElement('p')
    intErr.innerText = "Number value must be a positive integer";
    intErr.id = 'intErr';
    errDiv.appendChild(intErr);
  } else if (isPositiveInteger(parseInt(colInput.value, 10)) == true && intErr != undefined) {
    intErr.remove();
  } else {
    return;
  }
}

// check user input string for min length 10 chars
// add or remove error message to/from the DOM
function handleStrErrs(){
  const strErr = document.getElementById('strErr');
  console.log(userStr.value);
  if ((userStr.value.length < 10) && strErr == undefined) {
    document.getElementById('errors');
    const strErr = document.createElement('p')
    strErr.innerText = "String must be a minimum of 10 characters";
    strErr.id = 'strErr';
    errDiv.appendChild(strErr);
  } else if ((userStr.value.length > 9) && strErr != undefined) {
    strErr.remove();
  } else {
    return;
  }
}

// use regex to test for positive integer
function isPositiveInteger(s) {
  return /^\+?[1-9][\d]*$/.test(s);
}