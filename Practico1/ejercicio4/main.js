"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let canvasWidth = 600;
let canvasHeight = 400;
let imageData = ctx.createImageData(canvasWidth, canvasHeight);

let r = 255;
let g = 255;
let b = 255;
let a = 255;

drawRect(imageData, r, g, b, a);
ctx.putImageData(imageData, 0, 0);

function drawRect(imageData, r, g, b, a) {
  let coeficiente = 255 / canvasHeight; /* Nos da el porcentaje en ese momento del color */
  for (let y = 0; y < canvasHeight; y++) {
    if (y < height / 2) {
      r = coeficiente * y;
      g = coeficiente * y;
      b = coeficiente * y;
    } else {
      let coeficiente = 255 / canvasHeight;
      r = (255 - coeficiente) * y;
      g = (255 - coeficiente) * y;
      b = (255 - coeficiente) * y;
    }
    for (let x = 0; x < canvasWidth; x++) {
      setPixel(imageData, x, y, r, g, b, a);
    } 
  }  
}

function setPixel(imageData, x, y, r, g, b, a) {
  let index = (x + y * canvasWidth) * 4;
  imageData.data[index + 0] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = a;
}