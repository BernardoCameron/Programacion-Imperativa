const prompt = require("prompt-sync")({ sigint: true });
/*
Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.
 */

function totalAPagar(vehiculo, litrosConsumidos) {
    if (vehiculo === "coche") {
        let total = litrosConsumidos * 86;
        if (litrosConsumidos >= 0 && litrosConsumidos < 25) {
            return total + 50;
        } else if (litrosConsumidos > 25) {
            return total + 25;
        };
    } else if (vehiculo === "moto") {
        let total = litrosConsumidos * 70;
        if (litrosConsumidos >= 0 && litrosConsumidos < 25) {
            return total + 50
        } else if (litrosConsumidos > 25) {
            return total + 25;
        };
    } else if (vehiculo === "autobus") {
        let total = litrosConsumidos * 55;
        if (litrosConsumidos >= 0 && litrosConsumidos < 25) {
            return total + 50
        } else if (litrosConsumidos > 25) {
            return total + 25;
        };
    }
};

//console.log(totalAPagar("moto", 60));

/*
Necesitamos armar el sistema para un local de venta de sándwiches.Los clientes
eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
el valor de su selección al precio.Por ejemplo, partiendo de un sándwich base
vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
que el total a pagar sería x + y, y así sucesivamente con el resto de los ingredientes.
Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
recibiremos los datos de la siguiente manera.
Nos llega un string indicando el tipo de sándwich base.Estos tienen un valor base
diferente por cada selección:
● Pollo = $150(“pollo”)
● Carne = $200(“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5
Cada uno de estos adicionales están representados por booleanos —es decir, true o
false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
total de seis valores booleanos, uno por cada adicional—.
Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
Finalmente, deberá retornar el valor numérico del total a pagar del cliente.*/

// let tipoDeSandwich = prompt(`Ingrese el tipo de Sandwich: pollo o carne`);
// let tipoDePan = prompt(`Ingrese el tipo de pan: blanco, negro o s/gluten`)
// let queso = prompt("Quieres queso?");
// let tomate = prompt("Quieres tomate?");
// let lechuga = prompt("Quieres lechuga?");
// let cebolla = prompt("Quieres cebolla?");
// let mayonesa = prompt("Quieres mayonesa?");
// let mostaza = prompt("Quieres mostaza?");

// function totalSandwich(tipoDeSandwich, tipoDePan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
//     let total = 0
//     if (tipoDeSandwich === "pollo") {
//         total = 150
//         if (tipoDePan === "blanco") {
//             total = total + 50
//             if (queso === "si") {
//                 total = total + 20
//             } else if (tomate === "si") {
//                 total = total + 15
//                 console.log(total);
//             }
//         }
//     } else if (tipoDeSandwich === "carne") {
//         total = 200
//         if (tipoDePan === "blanco") {
//             total = total + 50
//         }
//     }
// }
// console.log(totalSandwich());


// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

function numeros(numero) {
    for (let i = numero; i < i + 10; i++)
        console.log(i)
}

numeros(10);