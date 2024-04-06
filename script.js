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
  

  if (temp.startsWith("0")) {
    temp = parseInt(temp, 10);
  }
  
  temp = eval(temp);
  document.getElementById("result").value = temp;
}

function deleteLast() {
  temp = temp.slice(0, -1);
  document.getElementById("result").value = temp;
}

function clearResult() {
  temp = "";
  document.getElementById("result").value = "0";
}

function add() {
  calculate();
  let ol = document.querySelector("ol");
  let li = document.createElement("li");
  let resultInput = document.getElementById("result").value;

  li.innerText = resultInput
  li.classList.add("clickable")
  li.onclick = function () {
    let value = li.innerText;
    appendValue(value);
  };
  ol.appendChild(li);
  
  clearResult();
}

function clr() {
  let li = document.querySelectorAll("li");
  li.forEach(function (element) {
    element.remove();
  });
}

function chg() {
  let liItems = document.querySelectorAll("li");

  function handleClick() {
    let resultValue = document.getElementById("result").value;
    this.textContent = resultValue;
    this.onclick = function(){
      let value = this.innerText;
      appendValue(value)
    };
    console.log(this)
  }

  liItems.forEach(function (li) {
    li.onclick = handleClick;
  });
}

function del() {
  let liItems = document.querySelectorAll("li");
  liItems.forEach(function (li) {
    li.onclick = function () {
      li.remove();
      return;
    };
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    temp = document.getElementById("result").value.toString();
    calculate();
  }
});