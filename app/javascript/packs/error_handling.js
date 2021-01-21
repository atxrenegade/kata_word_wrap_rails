// client side user input validations
console.log("loaded");

const colInput = document.getElementById('col_num');
const userStr = document.getElementById('user_str');
const errDiv = document.getElementById('errors');
const submitBtn = document.getElementById('submit-button');

colInput.addEventListener('keypress', checkNum);
userStr.addEventListener('keypress', checkStr);
submitBtn.addEventListener('click', validateInput);

// check user input for positive int
// if not present create and append error element
// remove error element if num is valid
function checkNum() {
  var errEl = document.getElementById('intErr');
  if ((isPositiveInteger(parseInt(colInput.value, 10)) != true) && errEl == undefined) {
    addErrMsg('intErr', 'Number value must be a positive integer');
  } else if ((isPositiveInteger(parseInt(colInput.value, 10)) == true)){
    // console.log("Trigger 1")
    if (errEl != undefined) {
      errEl.remove();
    } 
  } else {
    return;
  }  
}

// check user input for user input string of min 10 chars
// in not present create and append error element
// remove error element is string is valid
function checkStr(){
  var errEl = document.getElementById('strErr');
  if (userStr.value.length < 10){
    if (errEl == undefined) {
      addErrMsg('strErr', 'String must be a minimum of 10 characters')
    }
  } else {
    if (errEl != undefined) {
      errEl.remove();
    }
  }
}

function addErrMsg(id, msg){
  var errEl = document.createElement('p');
  errEl.innerText = msg;
  errEl.id = id;
  errDiv.appendChild(errEl);
}

function validateInput() {
  if ((isPositiveInteger(parseInt(colInput.value, 10)) != true && userStr.value.length < 10)) {
    console.log("Validation passed")
    //render show page;
  } else {
    return;
  }
}

// use regex to test for positive integer
function isPositiveInteger(s) {
  return /^\+?[1-9][\d]*$/.test(s);
}

