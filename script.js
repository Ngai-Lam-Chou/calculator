let temp = 0;

function appendValue(val) {
  if (document.getElementById("result").value === 0 || document.getElementById("result").value === '0'){
    temp = val;
  } else {
    temp = temp + val;
  }
  document.getElementById('result').value = temp;
}

function calculate() {
  let temp = document.getElementById("result").value;
  

  if (temp.startsWith("0") && temp === "0") {
    temp = parseInt(temp, 10);
  }
  
  temp = eval(temp);
  document.getElementById("result").value = temp;

  addNotePad();
  clearResult();
  appendValue(temp)
}

function deleteLast() {
  temp = temp.slice(0, -1);
  document.getElementById("result").value = temp;
}

function clearResult() {
  temp = "";
  document.getElementById("result").value = "0";
}

function addNotePad() {
  let ol = document.querySelector("ol");
  let li = document.createElement("li");
  let resultInput = document.getElementById("result").value;

  li.innerText = resultInput;
  li.classList.add("clickable");
  li.onclick = function () {
    let value = li.innerText;
    appendValue(value);
  };
  ol.appendChild(li);

  const maxLiElements = 16;
  if (ol.children.length > maxLiElements) {
    ol.removeChild(ol.firstChild);
  }
}

function clearNotePad() {
  let ol = document.querySelector("ol");

  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    temp = document.getElementById("result").value.toString();
    calculate();
  }
});