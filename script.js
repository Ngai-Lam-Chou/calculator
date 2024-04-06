let temp = "";

function appendValue(val) {
  temp = temp + val;
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

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    temp = document.getElementById("result").value.toString();
    calculate();
  }
});

function add() {
  ol = document.querySelector("ol");
  let li = document.createElement("li");
  calculate();
  li.textContent = document.getElementById("result").value;
  li.classList.add("clickable");
  li.onclick = function () {
    var value = this.textContent;
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
  liItems.forEach(function (li) {
    li.onclick = function () {
      this.textContent = document.getElementById("result").value;
    };
  });
}

function del() {
  let liItems = document.querySelectorAll("li");
  liItems.forEach(function (li) {
    li.onclick = function () {
      li.remove();
      li.classList.remove("clickable");
    };
    li.classList.add("clickable");
  });
}

var listItems = document.querySelectorAll("li");

function addtor() {
  listItems.forEach(function (listItem) {
    listItem.addEventListener("click", function () {
      var value = this.innerText;
      console.log(value);
      appendValue(value);
    });
  });
}
