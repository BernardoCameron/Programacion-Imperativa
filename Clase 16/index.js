//Ejercicio 1

// const numeritos = [1, 2, 3, 4, ...100]
// for (let i = 1; i <= numeritos.length; i++) {
//     if (numeritos[i] % 3 === 0 && numeritos[i] % 5 === 0) {
//         console.log('FizzBuzz')
//     } else if (numeritos[i] % 3 === 0) {
//         console.log('Fizz')
//     } else if (numeritos[i] % 5 === 0) {
//         console.log("buzz");
//     }
// }


//Ejercicio 2
let array1 =
    [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

const elementoIndice = (array, indice) => {
    for (let i = 0; i < array.length; i++) {
        if (indice === i) {
            console.log(array[i]);
        }
    }
}

//elementoIndice(array1, 1)

//Ejercicio 3



const diasPorMes = (mes) => {
    switch (mes) {
        case 1:
            console.log(`Enero tiene 31`);
            break;
        case 2:
            console.log(`Febrero tiene 28`);
            break;
        case 3:
            console.log(`Marzo tiene 31`);
            break;
        case 4:
            console.log(`Abril tiene 30`);
            break;
        case 5:
            console.log(`Mayo tiene 31`);
            break;
        case 6:
            console.log(`Junio tiene 30`);
            break;
        case 7:
            console.log(`Julio tiene 31`);
            break;
        case 8:
            console.log(`Agosto tiene 31`);
            break;
        case 9:
            console.log(`Septiembre tiene 30`);
            break;
        case 10:
            console.log(`Octubre tiene 31`);
            break;
        case 11:
            console.log(`Noviembre tiene 30`);
            break;
        case 12:
            console.log(`Diciembre tiene 31`);
            break;


    }
}

//diasPorMes(2);


//Ejercicio 4

// const invertirNumerito = (numero) => {
//     let numeritos = []
//     console.log(numero.length);
//     for (let i = 0; i < numero.length; i++) {
//         numeritos.push(numero[i])
//         console.log(numeritos);
//     }
//     let numeritosAlrevez = numeritos.reverse()
//     console.log(numeritosAlrevez);
// }

//invertirNumerito(12345)

function invertirNumerito(num) {
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}

//console.log(invertirNumerito(123456));
// Si, lo robamos

let arrayNumeros =
    [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

const repetidos = (array) => {


}




