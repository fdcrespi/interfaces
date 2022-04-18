let array = [];
let width = 100;
let height = 100;
for (let i = 0; i < width; i++) {
    array[i] = [];
    for (let j = 0; j < height; j++) {
      array[i][j] = Math.floor(Math.random() * 100);
    }
}

/**
 * @description Funcion que retorna el valor maximo de una matriz
 */
function maxValue(array) {
  let max = array[0][0];
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if(array[i][j] > max);
    }
  }
  console.log(`El valor máximo de la matriz es ${max}`);
}

  
/**
 * @description Funcion que retorna el valor maximo de las filas pares y el minimo de las impares
 */
function maxMinValue(array) {
  let max = array[0][0];
  let min = array[0][0];
  for (let i = 0; i < width; i++) { 
    for (let j = 0; j < height; j++) {
      if (i % 2 == 0 && array[i][j] > max) {
        max = array[i][j];
      }
      else if (i % 2 != 0 && array[i][j] < min || minimmo == 0) {
        min = array[i][j];
      }
    }
  }
  console.log(`El valor máximo de las filas pares es ${max} y el mínimo de las filas impares es ${min}`);
}