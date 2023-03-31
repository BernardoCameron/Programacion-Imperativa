//A partir de el siguiente array de edades nos solicitan realizar lo siguiente:



//              i
//                  j



// const menores = [];
// const mayores = [];
// const diezyocho = [];

// for (let i = 0; i < edades.length; i++) {
//     if (edades[i] < 18) {
//         menores.push(edades[i])
//     } else if (edades[i] >= 18) {
//         mayores.push(edades[i])
//     }
// }

// for (let i = 0; i < mayores.length; i++) {
//     if (mayores[i] == 18) {
//         diezyocho.push(mayores[i])
//     }

// }
//console.log(menores, mayores);
//console.log(diezyocho);
let menor = 0
// for (let i = 0; i < edades.length; i++) {
//     for (let j = 1; j < edades.length; j++) {
//         if (edades[i] < edades[j]) {
//             menor = edades[i]
//         }
//     }
// }

console.log(menor);


// Obtener el mayor.
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
let mayor = 0;

for (let i = 0; i < edades.length - 1; i++) {
    for (let j = 1; j < edades.length; j++) {
        if (edades[j] > edades[i]) {
            mayor = edades[j]
            console.log(edades[i], edades[j], mayor);
        }
    }
}

//console.log(mayor);


for (let i = 0; i < edades.length; i++) {
    edades[i] += 1

}

console.log(edades);