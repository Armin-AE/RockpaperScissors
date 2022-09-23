let btn = document.querySelectorAll("button");
let pcScore = document.getElementById("score1");
let playerScore = document.getElementById("score2");
let pcC = document.getElementById("choicePc");
let PlC = document.getElementById("choicePl");
let Res = document.getElementById("finalRes");
let scoreWin = document.getElementById("scoreWin");
const score = [0, 0];
let [score1, score2] = score;
btn.forEach((button) => {
  button.addEventListener("click", () => {
    let playerChoice = button.innerHTML;
    let pcSetChoice = Math.floor(Math.random() * btn.length);
    let pcChoice = btn[pcSetChoice].innerHTML;
    pcC.innerHTML = "Computer:" + " " + pcChoice;
    PlC.innerHTML = "You:" + " " + playerChoice;
    pcScore.innerHTML = "Computer Score:" + " " + score1;
    playerScore.innerHTML = "Player Score:" + " " + score2;
    Res.innerHTML = "";
    play(playerChoice, pcChoice);
    setColorScore();
    setColorRes();
  });
});
function play(playerChoice, pcChoice) {
  if (pcChoice == "Scissors" && playerChoice == "Paper") {
    score1++;
    scoreWin.innerHTML = "You Lose";
  } else if (pcChoice == "Rock" && playerChoice == "Scissors") {
    score1++;
    scoreWin.innerHTML = "You Lose";
  } else if (pcChoice == "Paper" && playerChoice == "Rock") {
    score1++;
    scoreWin.innerHTML = "You Lose";
  } else if (pcChoice == playerChoice) {
    scoreWin.innerHTML = "Tie";
  } else {
    score2++;
    scoreWin.innerHTML = "You Win";
  }
  showRes();
}
function showRes() {
  if (score1 == 10) {
    Res.innerHTML = "Computer win";
    score1 = 0;
    score2 = 0;
  } else if (score2 == 10) {
    Res.innerHTML = "You Win";
    score1 = 0;
    score2 = 0;
  }
}
function setColorScore() {
  if (scoreWin.innerHTML === "You Lose") {
    scoreWin.style.color = "#e63946";
  } else if (scoreWin.innerHTML === "Tie") {
    scoreWin.style.color = "#ffd166";
  } else {
    scoreWin.style.color = "#4ECDC4";
  }
}
function setColorRes() {
  if (Res.innerHTML == "You Win") {
    Res.style.color = "#06d6a0";
  } else {
    Res.style.color = "#e63946";
  }
}
