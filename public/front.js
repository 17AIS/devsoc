const wrong = document.querySelector("#wrong")
function stuff()  {
  let choice = prompt("yin or yang?")
  if (choice.toLocaleLowerCase() === "yin") {
    document.getElementById("body").style.background = "white";
    document.getElementById("body").style.color = "black";
    let image = document.getElementById("yingyang")
    image.src = "yinyang.png"
    wrong.innerText = ""

  } else if (choice.toLocaleLowerCase() === "yang") {
    document.getElementById("body").style.background = "black";
    document.getElementById("body").style.color = "white";
    let image = document.getElementById("yingyang")
    image.src = "yinyang.png"
    wrong.innerText = ""
    
  } else {
    document.getElementById("body").style.background = "rgb(255, 165, 158)";
    document.getElementById("body").style.color = "rgb(72, 41, 41)";
    let image = document.getElementById("yingyang")
    image.src = "sadness.png"
    wrong.innerText = "You Chose Wrong"


  }
  console.log("it works")
}
const windowButton = document.querySelector("#windowButton");
const log1 = document.querySelector("#log");

windowButton.addEventListener("click", () => {
  if (window.confirm("Do you want to open in new tab?")) {
    window.open("https://www.google.com/");
  } else {
    log1.innerText = "Glad you're staying!";
  }
});

const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

signButton.addEventListener("click", () => {
  let sign = prompt("What's your sign?");

  if (sign === null) {
    log.innerText = "OK, maybe next time.";
  } else if (sign.toLowerCase() === "") {
    log.innerText = "Don't be shy, enter your sign!";
  } else if (sign.toLowerCase() === "scorpio") {
    log.innerText = "Wow! I'm a Scorpio too!";
  } else {
    log.innerText = `${sign} is my favorite!`;
  }
});