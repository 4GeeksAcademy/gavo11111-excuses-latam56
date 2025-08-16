import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['Kari', 'Erick', 'Ulises', 'Rayisus'];
 let action = ['broke', 'hit', 'smash', 'hurt'];
 let what = ['their leg', 'their own head', 'their nose'];
 let when = ['while we were practicing volleyball', 'when we were skating', 'while we were traveling to the museum', 'while climbing the wall'];

 function getRandomNumber (b) {
  return Math.floor(Math.random() * b);
 }
 function getRandom (anyArray) {
  let max = anyArray.length; 
  let random = getRandomNumber(max);
  return anyArray[random];
 }

window.onload = function() {
  //write your code here
  console.log("Hey mom, I cannot take care of my nephews because");
  document.querySelector('#excuse').innerHTML = getRandom(who) + " " + getRandom(action) + " " + getRandom(what) + " " + getRandom(when)
  };

 // const excuseElement = document.querySelector (`#excuse ${when}`) 
  //const excuse = "Me comió la tarea el perro"
  //excuseElement.innerText = //
  




//(`#excuse ${when}`) /7 eso va despues de queryselector 