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

console.log(ordenar(personas));