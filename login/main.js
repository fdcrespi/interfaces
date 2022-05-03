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

/**
 * Canvas para cable
 * */
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
ctx.beginPath();
ctx.moveTo(50, 0);
ctx.bezierCurveTo(0, 50, 50, 15, 50, height/2);
ctx.bezierCurveTo(height/2, 35, 30, 75, 150, height);
ctx.stroke();
