function appendValue(value) {
  const display = document.getElementById("display");
  display.value = display.value + value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function calculate() {
  const display = document.getElementById("display");

  try {
    // For a simple practice calculator
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    alert("Invalid expression");
  }
}
