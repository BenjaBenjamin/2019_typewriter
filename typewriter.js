"use strict";

document.querySelector(".button").addEventListener("click", frameLooper);

var myText = `This text is written one character at a time, but I can't figure out the sounds :(`;
var myArray = myText.split("");
var loopTimer;
var audio = document.getElementById("typekey1");
var audio2 = document.getElementById("typekey2");

function start() {
  frameLooper();
}

async function frameLooper() {
  document.querySelector(".typewritten").classList.remove("hidden");
  document.querySelector(".button").classList.add("hidden");
  audio.play();
  audio2.play();
  if (myArray.length > 0) {
    document.getElementById("type_text").innerHTML += myArray.shift();
  } else {
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout("frameLooper()", 70);
}
