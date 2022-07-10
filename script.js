// const numbers = document.getElementById("btn-num");
// const multiply = document.getElementById("multiply-num");
// const divide = document.getElementById("divide-num");
// const add = document.getElementById("add-num");
// const minus = document.getElementById("minus-num");

// const equal = document.getElementById("equal");
// const dot = document.getElementById("dot");
// const percent = document.getElementById("percent");
// const plusOrMinus = document.getElementById("plus-or-minus");

// function clear() {
//   document.getElementById("clear-num").value = "";
// }

// function display() {
//   document.getElementById("clear-num").value += value;
// }

// function calculate() {
//   let answer = document.getElementById("clear-num").value;
//   let displayAnswer = eval(answer);
//   document.getElementById("clear-num").value = displayAnswer;
// }

let display = document.querySelector(".display");
let result = document.querySelector(".results");
let buttons = Array.from(document.querySelectorAll(".btn"));
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log("clicked");
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "⇚":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
// buttons.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     let value = e.target;
//   });
// })(function () {
//   let screen = document.querySelector(".screen");
//   let buttons = document.querySelectorAll(".btn");
//   let clear = document.querySelector(".btn-clear");
//   let equal = document.querySelector(".btn-equal");

//   //retrieve data from numbers that are clicked
//   buttons.forEach(function (button) {
//     button.addEventListener("click", function (e) {
//       let value = e.target.dataset.num;
//       screen.value += value;
//     });
//   });

//   equal.addEventListener("click", function (e) {
//     if (screen.value === "") {
//       screen.value = "Please Enter a Value";
//     } else {
//       let answer = eval(screen.value);
//       screen.value = answer;
//     }
//   });

//   clear.addEventListener("click", function (e) {
//     screen.value = "";
//   });
// })();
