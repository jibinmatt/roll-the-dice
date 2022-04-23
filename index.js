"use strict";
let score = 0;
let randomVar;
let trialNumber = 1;
let buttonVal = document.getElementsByTagName("button");
let result = document.getElementById("result");
let report = document.getElementById("text-init-loading");
let timeS = document.getElementById("timeS");
let dice = document.getElementById("dice");
let highScore = document.getElementById("h-score");

const load = () => {
  report.innerHTML = `<h2>Loading...</h2>
    <span style="font-size:0.7em;">
      The game will start in few seconds!
    </span>`;
  document.getElementById("h").style.visibility = "hidden";
  result.style.visibility = "hidden";
  document.getElementById("text-user-selected").style.visibility = "hidden";
  Array.from(buttonVal).forEach((element) => {
    element.addEventListener("click", Clicked);
    element.disabled = false;
    element.classList.add("disabled");
  });
  setTimeout(() => {
    report.style.visibility = "hidden";
    document.getElementById("h").style.visibility = "visible";
  }, 6000);
};

const DisplayTime = () => {
  let timesecond = 5;
  setInterval(() => {
    timeS.innerHTML = timesecond;
    timesecond--;
    if (timesecond == 0) {
      result.style.color = "#FFFFFF";
      result.innerHTML = "Can you guess it?";
      result.style.visibility = "visible";
      timesecond = 5;
    }
  }, 1000);
};

const Clicked = (e) => {
  let userSelectedNumber = e.target.innerText;
  dice.src = `img/${randomVar}.png`;
  document.getElementById("text-user-selected").innerHTML = userSelectedNumber;
  document.getElementById("text-user-selected").style.visibility = "visible";
  if (randomVar == userSelectedNumber) {
    result.style.color = "#1CE1BE";
    result.innerHTML = "You guess it right!";
    score++;
    document.getElementById("text-total-score").innerHTML = score;
  } else {
    result.style.color = "#FF6D2E";
    result.innerHTML = "Sorry, it was a wrong number!";
    if (highScore.textContent < score) {
      highScore.textContent = " " + score;
      document.getElementById("text-total-score").innerHTML = 0;
      score = 0;
    }
  }
  Array.from(buttonVal).forEach((element) => {
    element.disabled = true;
    element.classList.toggle("disabled");
  });
  trialNumber++;
  document.getElementById("text-ttrial-number").innerHTML = trialNumber;
};

const addNewRandom = () => {
  setInterval(() => {
    randomVar = Math.floor(Math.random() * 6) + 1;
    dice.src = `img/load.gif`;
    dice.style.width = "37.5%";
    document.getElementById("text-user-selected").style.visibility = "hidden";
    Array.from(buttonVal).forEach((element) => {
      element.disabled = false;
      element.classList.remove("disabled");
    });
  }, 5000);
};

window.onload = () => {
  load();
  DisplayTime();
  addNewRandom();
};
