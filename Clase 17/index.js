/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

const matriz5 = [
    [1,  2, 3, 4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];

let suma = 0
for (let i = 0; i < matriz5.length; i++) {
    for (let j = 0; j < matriz5[i].length; j++) {
        suma += matriz5[i][j]
    }
}

console.log(suma);


/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

//Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:



// const matriz10=[];
// function crearmatriz(){
//     for (let i = 1; i <= 10; i++) {
//         for (let j = 20; j <= 30; j++) {
//             matriz10.push([i][j])
//         }
//     }
// }

// crearmatriz()

// console.table(matriz10);


function generarMatriz() {
    let matriz = [];
  
    for(let i = 0; i < 10; i++) {
      let fila = [];
  
      for(let j = 0; j < 10; j++) {
        fila.push(i * 10 + j + 1);
      }
  
      matriz.push(fila);
    }
  
    return matriz;
  }
  
  let matriz = generarMatriz();
  console.table(matriz);


// 3) Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.


function sumaRojo(array){
    for (let i = 0; i < array[i].length; i++) {
        console.log(array);
        //console.log(array[i][1]);
        
    }

}
sumaRojo(matriz)