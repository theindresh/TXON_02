let display = document.getElementById("display");

function addToDisplay(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  let current = display.value;
  display.value = current.substring(0, current.length - 1);
}

function calculate() {
  let expression = display.value;
  let result;
  try {
    result = eval(expression);
  } catch (e) {
    result = "Error";
  }
  display.value = result;
}
