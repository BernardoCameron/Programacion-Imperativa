

// Ejercicio 1:

const empleado = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 52,
    salarioBruto: 1000000,
    activo: false
};

function calcularSalarioNeto(salario, deduccion) {
    return salario - (deduccion / 100 * salario)
}

//console.log(`${empleado.nombre} ${empleado.apellido} tiene un sueldo neto de $${calcularSalarioNeto(empleado.salarioBruto, 19)}`);

// Ejercicio 2:

const programadores = [
    {
        nombre: "Juan",
        salarioBruto: 2750,
        categoria: "junior",
        tareasHechas: 24
    }, {
        nombre: "Maria",
        salarioBruto: 2750,
        categoria: "junior",
        tareasHechas: 18
    }, {
        nombre: "Lorena",
        salarioBruto: 3900,
        categoria: "senior",
        tareasHechas: 27
    }
];

function aumentarSueldo(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].salarioBruto += 200
    }
    return array;
}

// console.log(programadores);
// aumentarSueldo(programadores)
// console.log(programadores);


//Ejercicio 3:


const calcularPremioPorPerformance = (array) => {
    let sum
    for (let i = 0; i < array.length; i++) {
        array[i].premio = 0
        if (array[i].tareasHechas >= 20) {
            sum = array[i].tareasHechas - 20
            if (array[i].categoria == "senior") {
                array[i].premio = sum * 25
                //console.log(sum);
            } else {
                array[i].premio = sum * 10
            }
        } else {
            array[i].premio = 0
        }
    }


}
calcularPremioPorPerformance(programadores)


for (let i = 0; i < programadores.length; i++) {
    programadores[i].DEDUCCION_IMPOSITIVA_PORCENTUAL = 17;
};

for (let i = 0; i < programadores.length; i++) {
    programadores[i].calcularSalarioNeto = (calcularSalarioNeto(programadores[i].salarioBruto, programadores[i].DEDUCCION_IMPOSITIVA_PORCENTUAL) + programadores[i].premio)
}
for (i = 0; i < programadores.length; i++) {
    programadores[i].calcularSalarioNeto = function () {
        let salarioNeto = calcularSalarioNeto(this.salarioBruto, this.DEDUCCION_IMPOSITIVA_PORCENTUAL);
        let premio = calcularPremioPorPerformance(this);
        return salarioNeto + premio;
    }
};


//console.log(programadores);

function mostrarDatosDelProgramador(nombre) {
    for (let i = 0; i < programadores.length; i++) {
        if (nombre === programadores[i].nombre) {
            console.log(`${programadores[i].nombre} es un/una programador/a ${programadores[i].categoria} que tiene un salario bruto de $${programadores[i].salarioBruto} y cobra un salario neto de $${programadores[i].calcularSalarioNeto}. Hasta el momento, ha hecho ${programadores[i].tareasHechas} tareas.`);
        }
    }
}

mostrarDatosDelProgramador("Lorena")
mostrarDatosDelProgramador("Maria")
mostrarDatosDelProgramador("Juan")

