"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let width = 600;
let height = 400;
let imageData = ctx.createImageData(width, height);

let r = 0;
let g = 0;
let b = 0;
let a = 255;

drawRect(imageData, r, g, b, a);
ctx.putImageData(imageData, 0, 0);

function drawRect(imageData, r, g, b, a) {
  let coeficiente = 255 / (width/2);
  for (let x = 0; x < width; x++) {
    if (x < width / 2) {
      r = x * coeficiente;
      g = x * coeficiente;
    } else {
      g = 255 - (x - width / 2) * coeficiente;
    }
    for (let y = 0; y < width; y++) {
      setPixel(imageData, x, y, r, g, b, a);
    } 
  }  
}

function setPixel(imageData, x, y, r, g, b, a) {
  let index = (x + y * width) * 4;
  imageData.data[index + 0] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = a;
}