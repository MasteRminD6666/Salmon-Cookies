//setattriubte

//lim click button
let hidden = false;
function limClick() {
  let button = document.getElementById("bt");
  let span = document.getElementById("lima");
  let insideWord = document.createElement("span");
  if (hidden === false) {
    hidden = !hidden;
    button.appendChild(insideWord);
    span.style.visibility = "hidden";
    insideWord.innerHTML = "9AM-5PM";
    span.style.visibility = "visible";
  }
}

//paris click button
let parisF = false;
function parisClick() {
  let button = document.getElementById("parisBtn");
  let span = document.getElementById("paris");
  let insideWord = document.createElement("span");
  if (parisF === false) {
    parisF = !parisF;
    button.appendChild(insideWord);
    span.style.visibility = "hidden";
    insideWord.innerHTML = "10AM-12PM";
    span.style.visibility = "visible";
  }
}

//dubia click button
let dubaiF = false;
function dubaiClick() {
  let button = document.getElementById("dubaiBtn");
  let span = document.getElementById("dubai");
  let insideWord = document.createElement("span");
  if (dubaiF === false) {
    dubaiF = !dubaiF;
    button.appendChild(insideWord);
    span.style.visibility = "hidden";
    insideWord.innerHTML = "24 Hour";
    span.style.visibility = "visible";
  }
}

//tokyo click button
let tokyoF = false;
function tokyoClick() {
  let button = document.getElementById("tokyoBtn");
  let span = document.getElementById("tokyo");
  let insideWord = document.createElement("span");
  if (tokyoF === false) {
    tokyoF = !tokyoF;
    button.appendChild(insideWord);
    span.style.visibility = "hidden";
    insideWord.innerHTML = "9AM-2AM";
    span.style.visibility = "visible";
  }
}
//seattle click button
let seattleF = false;
function seattleClick() {
  let button = document.getElementById("seattleBtn");
  let span = document.getElementById("seattle");
  let insideWord = document.createElement("span");
  if (seattleF === false) {
    seattleF = !seattleF;
    button.appendChild(insideWord);
    span.style.visibility = "hidden";
    insideWord.innerHTML = "5AM-5PM";
    span.style.visibility = "visible";
  }
}

let input2 = document.getElementById("input2");

//Callback function i read about it
// TODO  take the sumbtion value form the from
// TODO  Edit the locations
// TODO  Edit the style more
// input2.addEventListener('on',function submit(event) {

//  event.preventDefault();
//  let name = event.target.name.value
//  let email = event.target.email.value
//  let textarea = event.target.textarea.value
//  console.log(name);

// })
