
const numline = document.getElementById('numline');
const number_buttons = document.querySelectorAll('.number');
const operator_buttons = document.querySelectorAll('.operator');
const equal_button = document.getElementById('equals');
const clear_button = document.getElementById('clear');
let a = 0;
let b = 0;
let operator = '';

numline.readOnly = true;

let clear = () => {
  numline.innerHTML = '';
}

clear_button.addEventListener('click', function() {
  clear();
});

number_buttons.forEach(button => {
  button.addEventListener('click', function() {
    numline.innerHTML += button.getAttribute('name');
  })
});

operator_buttons.forEach(button => {
  button.addEventListener('click', function() {
    a = parseInt(numline.innerHTML);
    operator = button.getAttribute('name');
    clear();
  })
});

equal_button.addEventListener('click', function() {
  b = parseInt(numline.innerHTML);
  clear();
  numline.innerHTML = operate(operator,a,b);
})

let operate = (operator,a,b) => {
  switch (operator) {
    case '/': return a/b; break;
    case 'X': return a*b; break;
    case '-': return a-b; break;
    case '+': return a+b; break;
    default: return 'error';
  }
};
