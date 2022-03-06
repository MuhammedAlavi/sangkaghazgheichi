/**
 * سنگ = 1
 * 2 = کاغذ
 * 3 = قیچی
 */
function loadGame() {
  var r = Math.random(Date.now());
  r = Math.ceil(r * 3);
  window.localStorage["shei"] = r;
  document.getElementById("computer").innerHTML =
    "<img src='question.svg' alt='کاغذ' />";
}
function loadQuestionImage() {
  var r = window.localStorage["shei"];
  if (r == 1) {
    document.getElementById("computer").innerHTML =
      "<img src='stone.svg' alt='سنگ' />";
  }
  if (r == 2) {
    document.getElementById("computer").innerHTML =
      "<img src='paper.svg' alt='کاغذ' />";
  }
  if (r == 3) {
    document.getElementById("computer").innerHTML =
      "<img src='scissors.svg' alt='قیچی' />";
  }
}

function win() {
  loadQuestionImage();
  document.getElementById("message").innerHTML = "شما برنده شدید";
}

function lose() {
  loadQuestionImage();
  document.getElementById("message").innerHTML = "شما باختید";
}

function tie() {
  loadQuestionImage();
  document.getElementById("message").innerHTML = "مساوی";
}

function game(n) {
  var computer = window.localStorage["shei"];

  if (n == 1) {
    // کاربر سنگ دارد
    if (computer == 1) {
      // کامپیوتر سنگ دارد
      tie();
    } else if (computer == 2) {
      // کامپیوتر کاغذ دارد
      lose();
    } else if (computer == 3) {
      // کامپیوتر قیچی دارد
      win();
    }
  }
  if (n == 2) {
    // کاربر کاغذ دارد
    if (computer == 1) {
      // کامپیوتر سنگ دارد
      win();
    } else if (computer == 2) {
      // کامپیوتر کاغذ دارد
      tie();
    } else if (computer == 3) {
      // کامپیوتر قیچی دارد
      lose();
    }
  }
  if (n == 3) {
    // کاربر قیچی دارد
    if (computer == 1) {
      // کامپیوتر سنگ دارد
      lose();
    } else if (computer == 2) {
      // کامپیوتر کاغذ دارد
      win();
    } else if (computer == 3) {
      // کامپیوتر قیچی دارد
      tie();
    }
  }
}
