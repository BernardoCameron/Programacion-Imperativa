const prompt = require("prompt-sync")({ sigint: true });

//ejercicio 1

const conversorPulgadasaCm = () => {
    let dato = prompt("Ingrese las pulgadas: ");
    let resultado = dato * 2.54
    console.log(dato + " pulgadas es igual a " + resultado + "cms.");
}
conversorPulgadasaCm();


//ejercicio 2

const generadorURL = () => {
    let palabra = prompt("Ingrese una palabra: ");
    console.log("https://" + palabra + ".com/");
}
generadorURL();

//ejercicio 3

const admiracion = () => {
    let palabra = prompt("Ingrese una palabra: ");
    console.log(palabra + "!!!")
}
admiracion();

//ejercicio 4

const convertidorAniosPerro = () => {
    let edad = prompt("Ingrese la edad de su perro: ");
    let resultado = edad * 7;
    console.log("Tu perrito en realidad tiene " + resultado + " años.");
}
convertidorAniosPerro();

//ejercicio 5

const calculadorHorasTrabajo = () => {
    let horas = prompt("Ingrese su sueldo mensual: ");
    let resultado = horas / 40
    console.log("El valor de tu hora de trabajo es: $" + resultado);
}
calculadorHorasTrabajo();

//ejercicio 6

const calculadorIMC = () => {
    let kilos = prompt("Ingrese su peso: ");
    let altura = prompt("Ingrese su altura: ");
    let resultado = kilos / (altura * 2);
    console.log("Su IMC es: " + resultado);
}
calculadorIMC();

//ejercicio 7

const mayus = () => {
    let palabra = prompt("Ingrese una palabra: ");
    console.log(palabra.toUpperCase());
}
mayus();

//ejercicio 8

const tipo = () => {
    let dato = prompt("Ingrese algun dato: ");
    console.log("Tu dato es: " + typeof dato);
}

tipo();

//ejercicio 9

const circunferencia = () => {
    let radio = prompt("Ingrese el radio: ");
    let resultado = radio * 2 * Math.PI;
    console.log("La circunferencia es: " + resultado);
}

circunferencia();