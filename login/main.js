"use strict";

/* let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height; */

let tv = document.getElementById("tv");
let pantalla = document.getElementById("pantalla");

setTimeout(() => {
  tv.setAttribute("style", "display: none");
  pantalla.setAttribute("style", "display: block");
}, 3000);


let inputEmail = document.getElementById("email");
let inputPass = document.getElementById("password");
let iconEmail = document.getElementById("iconEmail");
let iconPass = document.getElementById("iconPass");

inputEmail.addEventListener("focus", (e) => {
  if (!iconPass.classList.contains("invisible")) {
    iconPass.classList.add("invisible");
  }
  iconEmail.classList.remove("invisible");
});

inputPass.addEventListener("focus", (e) => {
  if (!iconEmail.classList.contains("invisible")) {
    iconEmail.classList.add("invisible");
  }
  iconPass.classList.remove("invisible");
});