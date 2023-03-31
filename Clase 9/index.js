// 1) Sumar todas las notas y dividirlas entre la cantidad de notas a
// promediar, PROMEDIO=(NOTA1+NOTA2+NOTA3)/3

function promedioNotas(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    console.log(`El promedio final es: ${promedio.toFixed(1)}`);
}

promedioNotas(4, 7, 9);

// 2) Algoritmo para convertir una cantidad de pesos a dólares.

function pesosADolar(cantidadDePesos, valorDolar) {
    console.log(`${cantidadDePesos}$ equivalen a ${(cantidadDePesos / valorDolar).toFixed(2)} dolares.`);
}

pesosADolar(100000, 803)

// 3) Hacer un programa que calcule el salario de un empleado, si se
// descuenta el 20 % de su salario actual

function salarioNeto(sueldoBruto, descuentos) {
    console.log(sueldoBruto - (descuentos / 100 * descuentos))
}
salarioNeto(100, 10)

// 4) Hacer un programa para calcular el promedio de 3 notas; si el
// promedio es mayor que 7 mostrar aprobado, de lo contrario,
// mostrar desaprobado

function pasaCurso(...notas) {
    let suma = 0
    for (let nota in notas) suma += nota;
    //let promedio = (suma / pasaCurso.length)
    console.log(suma)
}

pasaCurso(10, 4);