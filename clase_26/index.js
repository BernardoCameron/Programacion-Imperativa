const numeros = [33, 27, 34, 30, 34, 25, 0, 1];

// numeros.forEach(valor => {
//     console.log(valor);
// });


const numerosIncrementados = numeros.map(valor => ++valor)

//console.log(numerosIncrementados);

const numerosSumados = numeros.reduce((acum, valor) => acum += valor)
//console.log(numerosSumados);


const arrayProfesionales = [
    {
        identificador: 0,
        estaHabilitado: true,
        honorarioConsulta: 2007.68,
        edad: 29,
        nombre: 'Huber Wilkins',
        especialidad: 'Neumonologia',
        cantidadConsultas: 2,
        puntuacion: 0
    },
    {
        identificador: 1,
        estaHabilitado: true,
        honorarioConsulta: 2325.56,
        edad: 21,
        nombre: 'Goldie Haley',
        especialidad: 'Cardiologia',
        cantidadConsultas: 4,
        puntuacion: 0
    },
    {
        identificador: 2,
        estaHabilitado: true,
        honorarioConsulta: 2208.17,
        edad: 36,
        nombre: 'Pena Landry',
        especialidad: 'Dermatologia',
        cantidadConsultas: 0,
        puntuacion: 0
    },
    {
        identificador: 3,
        estaHabilitado: true,
        honorarioConsulta: 3266.71,
        edad: 20,
        nombre: 'Leanne Burch',
        especialidad: 'Neumonologia',
        cantidadConsultas: 2,
        puntuacion: 0
    },
    {
        identificador: 4,
        estaHabilitado: false,
        honorarioConsulta: 2674.09,
        edad: 31,
        nombre: 'Haynes Fuentes',
        especialidad: 'Cardiologia',
        cantidadConsultas: 4,
        puntuacion: 0
    },
    {
        identificador: 5,
        estaHabilitado: false,
        honorarioConsulta: 1851.37,
        edad: 27,
        nombre: 'Tamika Fuentes',
        especialidad: 'Cardiologia',
        cantidadConsultas: 0,
        puntuacion: 0
    },
    {
        identificador: 6,
        estaHabilitado: false,
        honorarioConsulta: 2568.94,
        edad: 34,
        nombre: 'Russo Baldwin',
        especialidad: 'Dermatologia',
        cantidadConsultas: 0,
        puntuacion: 0
    },
    {
        identificador: 7,
        estaHabilitado: true,
        honorarioConsulta: 2601.76,
        edad: 36,
        nombre: 'Dodson Shaffer',
        especialidad: 'Cardiologia',
        cantidadConsultas: 10,
        puntuacion: 0
    },
    {
        identificador: 8,
        estaHabilitado: false,
        honorarioConsulta: 1949.92,
        edad: 40,
        nombre: 'Guerra Bright',
        especialidad: 'Neumonologia',
        cantidadConsultas: 0,
        puntuacion: 0
    },
    {
        identificador: 9,
        estaHabilitado: true,
        honorarioConsulta: 3898.11,
        edad: 28,
        nombre: 'Dina Navarro',
        especialidad: 'Cardiologia',
        cantidadConsultas: 15,
        puntuacion: 0
    },
    {
        identificador: 10,
        estaHabilitado: true,
        honorarioConsulta: 2745.73,
        edad: 27,
        nombre: 'Stafford Watts',
        especialidad: 'Cardiologia',
        cantidadConsultas: 3,
        puntuacion: 0
    },
    {
        identificador: 11,
        estaHabilitado: true,
        honorarioConsulta: 2808.98,
        edad: 39,
        nombre: 'Joni Avery',
        especialidad: 'Neumonologia',
        cantidadConsultas: 5,
        puntuacion: 0
    },
    {
        identificador: 12,
        estaHabilitado: true,
        honorarioConsulta: 1941.13,
        edad: 25,
        nombre: 'Mayra Tran',
        especialidad: 'Oftamologia',
        cantidadConsultas: 2,
        puntuacion: 0
    },
    {
        identificador: 13,
        estaHabilitado: true,
        honorarioConsulta: 3930.0344999999998,
        edad: 23,
        nombre: 'Ward Dale',
        especialidad: 'Cardiologia',
        cantidadConsultas: 1,
        puntuacion: 0,
        puntaje: 3
    },
    {
        identificador: 14,
        estaHabilitado: true,
        honorarioConsulta: 8900,
        edad: 28,
        nombre: 'Martin Smith',
        especialidad: 'Arquitecto',
        cantidadConsultas: 8,
        puntuacion: 100,
        puntaje: 5
    },
    {
        identificador: 15,
        estaHabilitado: true,
        honorarioConsulta: 10000,
        edad: 28,
        nombre: 'Will Smith',
        especialidad: 'Arquitecto',
        cantidadConsultas: 48,
        puntuacion: 50,
        puntaje: 4
    }
];


// A. Utilizar un método de array que permita recorrer todo el arrayProfesionales

// proporcionado en el archivo app.js. En cada iteración realizaremos la impresión de dos propiedades de cada objeto en cuestión:
//nombre - especialidad.
//Cuando ejecutemos este método deberíamos visualizar algo como lo siguiente en nuestra consola:
// ‘Huber Wilkins - Neumonología’
// ‘Goldie Haley - Cardiología‘
// ‘Pena Landry - Dermatología‘

arrayProfesionales.forEach(valor => {
    console.log("'" + valor.nombre + " - " + valor.especialidad + "'");
});

// B. Utilizar un método de array que permita recorrer todo el arrayProfesionales y modificar de cada uno la propiedad honorarioConsulta, incrementado el valor de  la misma en un 5%. Luego imprimir el arrayProfesionales para ver la modificación realizada

// arrayProfesionales.forEach(valor => {
//     valor.honorarioConsulta = valor.honorarioConsulta * 1.05
//     console.log(valor);
// });

const honorarioAumentado = arrayProfesionales.map((valor) => Math.round(valor.honorarioConsulta * 1.05))

console.log(honorarioAumentado);

// C. Utilizar un método de array que permita recorrer todo el array de profesionales y retornar profesionales deshabilitados. Es decir, filtrar por la propiedad estaHabilitado cuando esta sea false. Guardar el retorno de este filtro en una variable profesionalesDeshabilitados e imprimirla para verificar los objetos filtrados.

const profesionalesInhabilitados = arrayProfesionales.filter((valor) => {
    return valor.estaHabilitado === false
})

console.log(profesionalesInhabilitados);


// D. Utilizar un método de array que permita recorrer todo el array de profesionales y retornar profesionales habilitados. Es decir, filtrar por la propiedad estaHabilitado cuando esta sea true. Guardar el retorno de este filtro en una variable profesionalesHabilitados e imprimirla para verificar los objetos filtrados.


const profesionalesHabilitados = arrayProfesionales.filter((valor) => {
    return valor.estaHabilitado === true
})
console.log(profesionalesHabilitados);

// E. Utilizar un método de array que permita recorrer todo el array de profesionales y retornar profesionales cuya especialidad sea “Arquitecto”. Es decir, filtrar por la propiedad especialidad cuando esta sea igual a “Arquitecto”. Guardar el retorno de este filtro en una variable arquitectos e imprimirla para verificar los objetos filtrados.


const profesionalesArquitectos = arrayProfesionales.filter((valor) => {
    return valor.especialidad === "Arquitecto"
})

console.log(profesionalesArquitectos);

// F. Utilizar un método de array que permita recorrer todo el array y modificar de cada uno la propiedad estaHabilitado a true. Se recomienda utilizar la variable obtenida en el punto C, es decir la variable profesionalesDeshabilitados.
// Imprimir el resultado de este método

const cambioEstado = profesionalesInhabilitados.map((valor) => {
    valor.estaHabilitado = true
    return valor
})

console.log(cambioEstado);


// G. Ahora, necesitamos obtener un valor que nos indique la cantidad de consultas atendidas por todos los profesionales. Para ello utilizaremos un método de array que nos facilite esto. Asignamos el retorno de este método en una variable llamada cantidadTotalConsultas, luego debes imprimirla.



const cantidadTotalConsultas = arrayProfesionales.reduce((acum, valor) => {
    acum = acum + valor.cantidadConsultas
})

console.log(cantidadTotalConsultas);


const profesionales = arrayProfesionales.map((valor) => {
    let recaudacion = valor.honorarioConsulta * valor.cantidadConsultas
    return [valor.nombre, valor.especialidad, recaudacion]
})

console.log(profesionales);