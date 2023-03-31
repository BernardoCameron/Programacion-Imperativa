// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.
// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100
// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.
// 5) Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.

// function paola(numero) {
//     for (let i = 1; i <= 10; i++) {
//         //console.log(numero + i);
//     }
// }

// //paola(-20);


// for (let i = 5; i <= 20; i += 3) {
//     //console.log(i);
// }

// let suma = 0
// for (let i = 0; i <= 100; i++) {
//     suma = suma + i;
// }
// //console.log(suma);

// function miguel(numero) {
//     let factorial = 1
//     for (let i = 1; i <= numero; i++) {
//         factorial = factorial * i
//     }
//     console.log(factorial);
// }

// //miguel(5);


// function juan(numero) {
//     for (let i = 2; i <= numero; i++) {
//         console.log((i - 1) + (i - 2))
//     }
// }

// juan(10);

function tablaDeMultiplicar(numero) {
    let i = 1
    while (i <= 10) {
        console.log(numero + " * " + i + " = " + numero * i);
        i++
    }
}

tablaDeMultiplicar(5);