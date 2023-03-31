const prompt = require("prompt-sync")({ sigint: true });

//Nos dirigimos al cajero a retirar dinero
let clave = 1234
let cantidadDisponible = 15000;
let cantidadARetirar = prompt("Ingrese cantidad a retirar: ");


console.log(cantidadDisponible >= cantidadARetirar);

// Retiramos el dinero y verificamos el nuevo saldo disponible

cantidadDisponible = cantidadDisponible - cantidadARetirar;

console.log(cantidadDisponible);

// Con el dinero retirado pensamos en ir por un helado

let distanciaHeladeria = 500;

//Consideramos el clima

let temperatura = 33;

// Nos dirigimos a la heladeria y verificamos la tabla de precios

let heladoSimple = 2490;
let heladoDoble = 2990;
let heladoTriple = 3290;

// Nos decidimos por el helado triple

console.log(cantidadARetirar - heladoTriple)

