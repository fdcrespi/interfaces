"use strict";

let width = document.getElementsByTagName("body")[0].clientWidth;
let height = document.getElementsByTagName("body")[0].clientHeight;

let cvs = document.getElementById("canvas");
cvs.width = width;
cvs.height = height;
let ctx = cvs.getContext("2d");

// Dibuja rectangulo de color azul 
ctx.fillStyle = "rgba(0, 0, 255, 0.1)";
ctx.fillRect(0, 0, width, height);

// Crea entre 5 y 20 circulos de tamaño y posicion random en cierto tiempo de delay c/u
for (let i = 0; i < getRandomInt(5,20); i++) {
  setTimeout(() => {
    ctx.beginPath();
    ctx.arc(getRandomInt(0,width), getRandomInt(0,height), getRandomInt(10,50), 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${Math.random()})`;
    ctx.fill();
  }, i * 200);
}

/**
 * @param {*} min 
 * @param {*} max 
 * @returns numero aleatorio entre min y max
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* let circle = svg.createElement("circle");
circle.setAttribute("cx", "50");
circle.setAttribute("cy", "50");
circle.setAttribute("r", "40");
circle.setAttribute("fill", "red");
 */