import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  console.log("Hello Rigo from the console!");

  let numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let pinta = ["&hearts;", "&clubs;", "&spades;", "&diams;"];

  function randomnumber(number) {
    var random = Math.floor(Math.random() * number.length);
    return number[random];
  }

  function show() {
    const cara = randomnumber(pinta);
    if (cara === "&hearts;" || cara === "&diams;") {
      let x, i;
      x = document.querySelectorAll(".naipes");
      for (i = 0; i < x.length; i++) {
        x[i].style.color = "red";
      }
    }
    document.getElementsByClassName("naipes")[0].innerHTML = cara;
    document.getElementsByClassName("naipes")[1].innerHTML = cara;
    document.getElementById("cartanumero").innerHTML = randomnumber(numeros);
  }

  show();
};
