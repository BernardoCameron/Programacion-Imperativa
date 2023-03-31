


function loopDeParesEImpares(num) {
    for (let i = 0; i <= 100; i++) {
        let suma = num
        suma += i
        if (suma % 2 === 0) {
            console.log(`El numero: ${suma} es par`);

        } else {
            console.log(`El numero: ${suma} es impar`);
        }
    }
}

loopDeParesEImpares(3);


function sumatoria(num) {
    let auxilio = 0
    for (let i = 1; i <= num; i++) {
        auxilio += i;
    }
    return auxilio;
}

const nuevoArreglo = (num) => {
    let nuevoArray = []
    for (let i = 1; i <= num; i++) {
        nuevoArray.push(i)
    }
    return nuevoArray;
}

//console.log(nuevoArreglo(10));

const split = (textito) => {
    let array = []
    for (let i = 0; i <= textito.length - 1; i++) {
        array.push(textito[i])

    }
    console.log(array);
}
// split("hola")

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c", "d", "e"];

function arrayHandler(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        console.log(`Soy ${array1[i]} y yo soy ${array2[i]}`);
    }
}

//arrayHandler(arr1, arr2);


