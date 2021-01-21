// client side user input validations

const colInput = document.getElementById('col_num').innerText;
const userStr = document.getElementById('user_str').innerText;
const errDiv = document.getElementById('errors');

colInput.addEventListener('change', checkNum);
userStr.addEventListener('change', checkStr);

// check user input for positive int
// if not present create and append error element
// remove error element if num is valid
function checkNum(){
  if (isPositiveInteger(parseInt(colInput, 10)) != true) {
    var intErr = createElement('p')
    intErr.innerText = "Number value must be a positive integer"
    errDiv.appendChild(intErr);
  } 
}

// check user input for user input string of min 10 chars
// in not present create and append error element
// remove error element is string is valid
function checkStr(){
  if (userStr.length < 10){
    document.getElementById('errors');
    var strErr = createElement('p')
    strErr.innerText = "String must be a minimum of 10 characters"
    errDiv.appendChild(strErr);
  }
}

// use regex to test for positive integer
function isPositiveInteger(s) {
  return /^\+?[1-9][\d]*$/.test(s);
}



