"use strict";

let canvas = document.getElementById("canvas"); /* Me quedo con el canvas */
let ctx = canvas.getContext("2d"); /* Genero un contexto, lugar donde dibujo */

let width = 600; /* Ancho del imageData */
let height = 400; /* Alto del imageData */
let imageData = ctx.createImageData(width, height); /* Creo una imagen */

let r = 0; /* red */
let g = 0; /* green  */
let b = 255; /* blue */
let a = 255; /* alpha, sin transparencia */

drawRect(imageData, r, g, b, a); /* dibujar un rectangulo de los colores que querramos */
ctx.putImageData(imageData, 0, 0); /* Contexto pone el imageData en la posicion 0; 0 */

/**
 * 
 * @param {*} imageData 
 * @param {*} r 
 * @param {*} g 
 * @param {*} b 
 * @param {*} a 
 */
function drawRect(imageData, r, g, b, a) {
  
  /* Para que el degrade sea del mismo alto que el image data, de 0 a 255 pero 
  con una distancia de heigth */ 
  let coeficiente = 255 / height;
  for (let y = 0; y < height; y++) { /* Itero el alto del canvas */  
    r = coeficiente * y;
    g = coeficiente * y;
    /* b = coeficiente * y; */
    for (let x = 0; x < width; x++) {
      setPixel(imageData, x, y, r, g, b, a);
    } 
  }  
}

/** Si bien la imagen es una matriz, se almacena como arreglo */
function setPixel(imageData, x, y, r, g, b, a) {
  let index = (x + y * width) * 4; /* La formula de pasar matriz a arreglo. 4 por RGBA */
  imageData.data[index + 0] = r; /* red pixel 1 */
  imageData.data[index + 1] = g; /* green pixel 1 */
  imageData.data[index + 2] = b; /* blue pixel 1 */
  imageData.data[index + 3] = a; /* alpha pixel 1 */
}