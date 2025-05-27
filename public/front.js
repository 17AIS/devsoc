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
