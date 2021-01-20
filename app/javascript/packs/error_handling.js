//TO DO confirm input for col_num is a positive otherwise add error msg

const colInput = document.getElementById('col_num').innerText;
const userStr = document.getElementById('user_str').innerText;
const errDiv = document.getElementById('errors');

colInput.addEventListener('change', checkNum);
userStr.addEventListener('change', checkStr);

function checkNum(){
  if (isPositiveInteger(parseInt(colInput, 10)) != true) {
    var intErr = createElement('p')
    intErr.innerText = "Number value must be a positive integer"
    errDiv.appendChild(intErr);
  } 
}

function checkStr(){
  if (userStr.length < 10){
    document.getElementById('errors');
    var strErr = createElement('p')
    strErr.innerText = "String must be a minimum of 10 characters"
    errDiv.appendChild(strErr);
  }
}

function isPositiveInteger(s) {
  return /^\+?[1-9][\d]*$/.test(s);
}

// TO DO add event listener to clear error messages


