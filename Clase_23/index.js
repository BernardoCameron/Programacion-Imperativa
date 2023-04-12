//let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// 0  1  2  3  4  5
// Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
// // ● ¿Cuál es la posición del número 1?
// 0
// // ● ¿Cuál es la posición del número 5?
// 4
// // ● ¿Cuál es la posición del número 6?
// 5
// // ● ¿Cuál es la posición del número 9?
// 8
// // ● ¿Cuál es la posición del número 11?
// 10

const list = [12, 3, 5, 7, 1, 22, 47, 100];

let personas = [
    {
        id: 1,
        nombre: "Ale",
        edad: 15
    },
    {
        id: 2,
        nombre: "Javi",
        edad: 83
    },
    {
        id: 3,
        nombre: "Luis",
        edad: 26
    },
    {
        id: 4,
        nombre: "Dan",
        edad: 16
    },
    {
        id: 5,
        nombre: "Tito",
        edad: 22
    },
    {
        id: 6,
        nombre: "Marina",
        edad: 76
    },
    {
        id: 7,
        nombre: "Susy",
        edad: 35
    },
    {
        id: 8,
        nombre: "John",
        edad: 25
    },
];


function binarySearch(array, target) {
    let left = 0
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return "No ta"

}


//console.log(binarySearch(list, 12));

// utilizando bubble sort. Luego, respondan las siguientes preguntas:

// ordeneAsc(list);
// console.log(binarySearch(list, 12));
// console.log(binarySearch(list, 5));
// console.log(binarySearch(list, 22));
// console.log(binarySearch(list, 100));


// // ● ¿Cuál es la posición del número 12?
// 4
// // ● ¿Cuál es la posición del número 5?
// 2
// // ● ¿Cuál es la posición del número 22?
// 5
// // ● ¿Cuál es la posición del número 100?
// 7

// Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor:

const ordeneAsc = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }
    return array

}

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

console.log(ordene(personas, "ASC", "edad"));


// b. Crear una función buscarNombre que recibe como parámetros la
// colección de personas y una edad, y como resultado deberá imprimir
// por consola el nombre correspondiente a la persona cuya edad fue
// pasada como parámetro:


function buscarNombre(array, numEdad) {
    let left = 0
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        let guess = array[mid]
        //console.log(guess);
        if (guess.edad === numEdad) {
            return guess.nombre;
        } else if (guess.edad > numEdad) {
            right = mid - 1
        } else if (guess.edad < numEdad) {
            left = mid + 1
        }

    }
    return "no se encuentra"

}

console.log(buscarNombre(personas, 1));