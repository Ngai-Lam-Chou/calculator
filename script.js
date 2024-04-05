let temp;

function appendValue(val) {
    if (typeof temp === "undefined" || temp === 0) {
        temp = val;
    } else {
        temp = temp + val;
    }
    document.getElementById("result").value = temp;
}

function calculate() {
    temp = eval(temp);
    document.getElementById("result").value = temp;
}

function deleteLast() {
    temp = temp.slice(0, -1);
    document.getElementById("result").value = temp;
}

function clearResult() {
    temp = 0;
    document.getElementById("result").value = temp;
}

function sqrt() {
    temp = Math.sqrt(temp);
    temp = Number(temp.toFixed(11));
    document.getElementById("result").value = temp;
}

function sq() {
    temp = Math.pow(temp, 2);
    temp = Number(temp.toFixed(11));
    document.getElementById("result").value = temp;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      temp = document.getElementById("result").value.toString();
      calculate();
  }
});
