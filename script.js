//Timer Fields
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const millisecondElement = document.querySelector(".millisecond");

//Buttons
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");
const lapButton = document.querySelector(".lap");
const deleteButton = document.querySelector(".delete");

//Listeners
startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
pauseButton.addEventListener("click", () => {
  clearInterval(interval);
});
resetButton.addEventListener("click", () => {
  clearInterval(interval);
  clearFields();
  disableLapBtn();
});
lapButton.addEventListener("click", () => {
  clearInterval(interval);
  counter++;
  const results = document.querySelector(".results");
  const block = document.createElement("div");
  block.classList.add("results_info");
  block.innerText = `Lap №${counter}: ${minute > 9 ? minute : "0" + minute}:${
    second > 9 ? second : "0" + second
  }:${millisecond > 9 ? millisecond : "0" + millisecond}`;
  results.append(block);
  clearFields();
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
  enableDeleteBtn();
});
deleteButton.addEventListener("click", () => {
  const deleteElem = document.querySelector(".results");
  deleteElem.innerHTML = "";
  counter = 0;
  deleteButton.disabled = true;
});

//Variables
let hour = 0,
  minute = 0,
  second = 0,
  millisecond = 0,
  interval,
  counter = 0,
  disabled = true;

function startTimer() {
  millisecond++;

  //Milliseconds
  if (millisecond < 9) {
    millisecondElement.innerText = "0" + millisecond;
  }
  if (millisecond > 9) {
    millisecondElement.innerText = millisecond;
  }
  if (millisecond > 99) {
    second++;
    secondElement.innerText = "0" + second;
    millisecond = 0;
    millisecondElement.innerText = "0" + millisecond;
  }

  //Seconds
  if (second < 9) {
    secondElement.innerText = "0" + second;
  }
  if (second > 9) {
    secondElement.innerText = second;
  }
  if (second > 59) {
    minute++;
    minuteElement.innerText = "0" + minute;
    second = 0;
    secondElement.innerText = "0" + second;
  }

  // Minutes
  if (minute < 9) {
    minuteElement.innerText = "0" + minute;
  }
  if (minute > 9) {
    minuteElement.innerText = minute;
  }
  if (minute > 59) {
    hour++;
    hourElement.innerText = "0" + hour;
    minute = 0;
    minuteElement.innerText = "0" + minute;
    second = 0;
    secondElement.innerText = "0" + second;
  }

  //Hours
  if (hour < 9) {
    minuteElement.innerText = "0" + minute;
  }
  if (hour > 9) {
    minuteElement.innerText = minute;
  }
  if (hour > 59) {
    alert("Reset, please");
  }

  lapButton.disabled = false;
}

function clearFields() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  hourElement.textContent = "00";
  minuteElement.textContent = "00";
  secondElement.textContent = "00";
  millisecondElement.textContent = "00";
}

function disableLapBtn() {
  if (disabled) {
    lapButton.disabled = true;
  }
}
disableLapBtn();

function disableDeleteBtn() {
  if (disabled) {
    deleteButton.disabled = true;
  }
}
disableDeleteBtn();

function enableDeleteBtn() {
  const results_info = document.getElementsByName(".results_info");
  if (results_info !== null) {
    deleteButton.disabled = false;
  }
}

//NightMode
let nightMode = document.querySelector(".nightModeBtn");
let mode = false;
nightMode.addEventListener("click", function () {
  if (mode === false) {
    mode = true;
    document.querySelector("body").style.background = "#15202B";
    document.querySelector("h1").style.color = "#FFF";
    let timeNightMode = document.querySelectorAll(".time");
    for (let i = 0; i < timeNightMode.length; i++) {
      timeNightMode[i].style.background = "#008080";
    }
    let titleNightMode = document.querySelectorAll(".title");
    for (let i = 0; i < titleNightMode.length; i++) {
      titleNightMode[i].style.background = "#004f4f";
    }
    let buttonNightMode = document.querySelectorAll(".button");
    for (let i = 0; i < buttonNightMode.length; i++) {
      buttonNightMode[i].style.color = "#004f4f";
    }
    document.querySelector(".results_block").style.background = "#004f4f";
    document.querySelector(".results_block").style.color = "#FFF";
    document.querySelector(".nightModeBtn").style.color = "#FFF";
  } else {
    mode = false;
    document.querySelector("body").style.background = "#fff";
    document.querySelector("h1").style.color = "#000";
    let timeNightMode = document.querySelectorAll(".time");
    for (let i = 0; i < timeNightMode.length; i++) {
      timeNightMode[i].style.background = "#20b2aa";
    }
    let titleNightMode = document.querySelectorAll(".title");
    for (let i = 0; i < titleNightMode.length; i++) {
      titleNightMode[i].style.background = "#008080";
    }
    let buttonNightMode = document.querySelectorAll(".button");
    for (let i = 0; i < buttonNightMode.length; i++) {
      buttonNightMode[i].style.color = "#20b2aa";
    }
    document.querySelector(".results_block").style.background = "#fff";
    document.querySelector(".results_block").style.color = "#20b2aa";
    document.querySelector(".nightModeBtn").style.color = "#000";
  }
});
