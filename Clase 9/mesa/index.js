const prompt = require("prompt-sync")({ sigint: true });
// 1) Escribí un programa que le pida al usuario ingresar una frase y
// la imprima en la consola.
// Recordá que para pedirle al usuario que escriba una frase
// debés utilizar el método prompt() y para escribir en la consola
// debés utilizar el método console.log().



function palubria() {
    let palabra = prompt("Ingrese una frase: ")
    console.log(`tu palubria es: ${palabra}`);
}
//palubria();

// 2) Escribí un programa que le pregunte al usuario su nombre e
// imprima "Hola " seguido del nombre y un signo de
// exclamación.
// Por ejemplo, si el usuario ingresa "Pedro" el programa debe
// imprimir en la consola "Hola Pedro!".

function saludo() {
    let nombre = prompt("Ingrese su nombre: ");
    console.log(`Hola ${nombre}!`);
}
//saludo();

// 5) Escribí un programa que piense un número de forma aleatoria
// del 1 al 10 y le pida al usuario que lo trate de adivinar.Si el
// número es correcto debe imprimir en la consola "Felicitaciones,
// ese era!", de lo contrario, debe imprimir "Lo siento, intenta
// nuevamente!"

function adiviname() {
    let random = Math.floor(Math.random() * 11)
    console.log(random);
    let numero;
    while (numero !== random) {
        numero = prompt("Ingrese un numero: ")
        if (numero == random) {
            console.log("Felicitaciones, ese era!");
            break;
        } else {
            console.log("Lo siento, intenta nuevamente");
        }
    }
}
//adiviname();

// 6) Escribí un programa que imprima los números pares del 0 al
// 100.

function pares() {
    for (let i = 2; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
//pares();

// 7) Escribí un programa que itere sobre el arreglo nombres e
// imprima cada uno en la consola: const nombres = ["Pedro",
// "Pablo", "Maria", "Juan", "Diana"];

nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"]
for (let i = 0; i < nombres.length; i++) {
    // console.log(nombres[i]);
}


// 8) Construí un pseudocódigo que permita ingresar un número, si
// el número es mayor de 500, se debe calcular y mostrar en
// pantalla el 18% de este.

function porcentaje(num) {
    if (num > 500) {
        console.log(`este es el 18% de ${num}: ${num * 0.18}`)
    } else {
        console.log(num)
    }
}
//porcentaje(499);

// 9) Escribí una función llamada elemento que recibe un arreglo
// como parámetro. La función debe devolver el valor que se
// encuentra en la tercera posición. Si el arreglo no tiene al menos
// 3 elementos deberá retornar -1.

function elemento(array) {
    if (array.length < 3) {
        //     console.log(-1)
    } else {
        //       console.log(array[2]);
    }
}
//elemento([1, 2])

function menciona(texto, palabra) {
    if (texto.indexOf(palabra) >= 0) {
        return true;
    } else {
        return false;
    }
}


console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos', 'programación'));

let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(10);

console.log(licenciada);