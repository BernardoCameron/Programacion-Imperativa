let personas = [
    {
        nombre: "Dua",
        apellido: "Lipa",
        ocupacion: "cantante",
        estatura: 173
    },
    {
        nombre: "Ariana",
        apellido: "Grande",
        ocupacion: "cantante",
        estatura: 160
    },
    {
        nombre: "Taylor",
        apellido: "Swift",
        ocupacion: "cantante",
        estatura: 180
    }
];

const temperatura = [
    {
        dia: 1,
        mes: 11,
        tempMaxima: 34,
        tempMinima: 15
    },
    {
        dia: 2,
        mes: 11,
        tempMaxima: 29,
        tempMinima: 12
    },
    {
        dia: 3,
        mes: 11,
        tempMaxima: 33,
        tempMinima: 16
    },
    {
        dia: 4,
        mes: 11,
        tempMaxima: 30,
        tempMinima: 14
    },
    {
        dia: 5,
        mes: 11,
        tempMaxima: 32,
        tempMinima: 17
    },
    {
        dia: 6,
        mes: 11,
        tempMaxima: 28,
        tempMinima: 13
    },
    {
        dia: 7,
        mes: 11,
        tempMaxima: 31,
        tempMinima: 15
    },
    {
        dia: 8,
        mes: 11,
        tempMaxima: 29,
        tempMinima: 12
    },
    {
        dia: 9,
        mes: 11,
        tempMaxima: 26,
        tempMinima: 11
    },
    {
        dia: 10,
        mes: 11,
        tempMaxima: 30,
        tempMinima: 14
    },
    {
        dia: 11,
        mes: 11,
        tempMaxima: 28,
        tempMinima: 13
    },
    {
        dia: 12,
        mes: 11,
        tempMaxima: 32,
        tempMinima: 15
    },
    {
        dia: 13,
        mes: 11,
        tempMaxima: 31,
        tempMinima: 16
    },
    {
        dia: 14,
        mes: 11,
        tempMaxima: 33,
        tempMinima: 17
    },
    {
        dia: 15,
        mes: 11,
        tempMaxima: 29,
        tempMinima: 12
    },
    {
        dia: 16,
        mes: 11,
        tempMaxima: 30,
        tempMinima: 14
    },
    {
        dia: 17,
        mes: 11,
        tempMaxima: 28,
        tempMinima: 13
    },
    {
        dia: 18,
        mes: 11,
        tempMaxima: 31,
        tempMinima: 15
    },
    {
        dia: 19,
        mes: 11,
        tempMaxima: 27,
        tempMinima: 11
    },
    {
        dia: 20,
        mes: 11,
        tempMaxima: 33,
        tempMinima: 16
    },
    {
        dia: 21,
        mes: 11,
        tempMaxima: 29,
        tempMinima: 12
    },
    {
        dia: 22,
        mes: 11,
        tempMaxima: 32,
        tempMinima: 15
    },
    {
        dia: 23,
        mes: 11,
        tempMaxima: 30,
        tempMinima: 14
    }, {
        dia: 23,
        mes: 11,
        tempMaxima: 27,
        tempMinima: 14
    },
    {
        dia: 24,
        mes: 11,
        tempMaxima: 26,
        tempMinima: 12
    },
    {
        dia: 25,
        mes: 11,
        tempMaxima: 30,
        tempMinima: 14
    },
    {
        dia: 26,
        mes: 11,
        tempMaxima: 32,
        tempMinima: 16
    },
    {
        dia: 27,
        mes: 11,
        tempMaxima: 31,
        tempMinima: 17
    },
    {
        dia: 28,
        mes: 11,
        tempMaxima: 28,
        tempMinima: 15
    },
    {
        dia: 29,
        mes: 11,
        tempMaxima: 25,
        tempMinima: 13
    },
    {
        dia: 30,
        mes: 11,
        tempMaxima: 22,
        tempMinima: 10
    },
];


// Considerando la colección de personas que te presentamos en la demostración anterior, te proponemos el siguiente desafío:
// ¿Cómo podrías ordenar la colección, de menor a mayor, considerando solo la estatura? Utiliza bubble sort.

const ordenar = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].estatura > array[j + 1].estatura) {
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }

        }

    }
    return array;
}

//console.log(ordenar(personas));


// Ejercicio 1

// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen likes, se registra la cantidad de likes obtenidos por cada usuario en un array.
// Ordenar los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo
//—suponer que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

const participantes = [
    { participante: "Sofía Pacheco", cantidadLikes: 23 },
    { participante: "Luis Díaz", cantidadLikes: 12 },
    { participante: "Ana García", cantidadLikes: 37 },
    { participante: "Felipe Vargas", cantidadLikes: 5 },
    { participante: "Mariana Pérez", cantidadLikes: 16 },
    { participante: "Javier Rojas", cantidadLikes: 42 },
    { participante: "Valentina Gómez", cantidadLikes: 8 },
    { participante: "Lucía Torres", cantidadLikes: 29 },
    { participante: "Carlos Ortiz", cantidadLikes: 19 },
    { participante: "David Cruz", cantidadLikes: 1 },
    { participante: "Isabella Mendoza", cantidadLikes: 33 },
    { participante: "Gustavo Sánchez", cantidadLikes: 27 },
    { participante: "Camila Rodríguez", cantidadLikes: 11 },
    { participante: "Manuel Castillo", cantidadLikes: 7 },
    { participante: "Carolina Torres", cantidadLikes: 44 }
];

const ordene = (array, criterio, prop) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (criterio === "DESC" && array[j][prop] < array[j + 1][prop]) {
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }

            if (criterio === "ASC" && array[j][prop] > array[j + 1][prop]) {
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }

        }

    }
    return array;
}

ordene(participantes, "cantidadLikes")

let mayorCantidadLikes = `La mayor cantidad de likes fue: ${participantes[0].cantidadLikes} Likes`
let segundoLugar = `El segundo lugar obtubo ${participantes[1].cantidadLikes} Likes`
let tercerLugar = `El tercer lugar obtubo ${participantes[2].cantidadLikes} Likes`
let ultimoLugar = `El ultimo lugar obtubo ${participantes[14].cantidadLikes} Likes`

console.log(`${mayorCantidadLikes}
${segundoLugar}
${tercerLugar}
${ultimoLugar}`);


//Ejercicio 2


// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.



console.log(ordene(temperatura, "ASC", "tempMinima"));
console.log(ordene(temperatura, "DESC", "tempMaxima"));

