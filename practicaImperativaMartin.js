
// ? Ejercicios opcionales para practicar conceptos de Programación imperativa

// *By Martín 🧉 *
// - En caso de resolverlo sin problemas reaccionar con :white_check_mark:
// - Caso  contrario,  consultar en este canal la duda acompañada con algo  código, *`Buen código`*```js

// A - Nivel 1

// 1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos

// function sumar(num1, num2) {
//   return num1 + num2
// }

// console.log(sumar(3, 4));

const sumar = (num1, num2) => num1 + num2

//console.log(sumar(3, 11));

// 2 - Desarrollar una funcion que reciba 2 numeros y
//      retorne la suma de ambos, si el primer parametro es mayor,
//      caso contrario retornar la resta.

const sumarSiEsMayor = (num1, num2) => {
  if (num1 > num2) {
    return num1 + num2
  } else {
    return num1 - num2
  }
}

//console.log(sumarSiEsMayor(3, 4));


// 3 - Desarrollar una funcion que reciba 4 numeros y calcular la suma de total
//      si el el resultado es mayor o igual a 7, retornar 'Aprobado',
//      caso contrario retornar 'otra chance '.

const sumaTotal = (num1, num2, num3, num4) => {
  let suma = num1 + num2 + num3 + num4;
  if (suma > 7) {
    return "Aprobado"
  } else {
    return "otra chance"
  }
}

//console.log(sumaTotal(1, 3, 5, 3));
//console.log(sumaTotal(1, 1, 1, 1));


// 4 - Desarrollar una funcion que reciba 4 numeros y calcular la suma de total
//      si el el resultado es par, retornar la mitad del total,
//      caso contrario retornar el doble del total.

const sumaPar = (num1, num2, num3, num4) => {
  let suma = num1 + num2 + num3 + num4
  if (suma % 2 === 0) {
    return suma / 2
  } else {
    return suma * 2
  }
}

//console.log(sumaPar(3, 3, 3, 3));
//console.log(sumaPar(3, 3, 3, 2));

// *--------------------------------------------------------------------------------------*

// B  Nivel 2
// - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:

const edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];

// 1 - Funcion que reciba un array de edades y retorne el promedio

const promedioEdades = (array) => {
  let suma = 0
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i]
  }
  return `El promedio de las edades es: ${suma / array.length}`
}
//console.log(promedioEdades(edades));
// 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80

const mayorEdad = (array) => {
  let mayor = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    };
  }
  console.log(mayor)
}
//mayorEdad(edades)

// 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5
// 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
function repetidos(array) {
  let iteracion = array[0]
  for (let i = 0; i < array.length; i++) {
    iteracion += array[i]
    console.log(iteracion);
    if (iteracion === array[i]) {

    }
  }
}

repetidos(edades);

// 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario
// 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
//    {
//       edadesMenor : "// edades menor a 18",
//       edadesMayor : "// edades menor a 18"
//    }

// *--------------------------------------------------------------------------------------*


// C  Nivel 3

// 1 - Desarrollar un objeto literal que contenga 5 propiedades que sean del siguiente tipo:
//    - 2 String
//    - 1 Boolean
//    - 1 Number
//    - 1 Array
//    - 1 Metodo que retorne un saludito
//     por ejemplo:

//      let canHijo = {
//        nombre : 'Negrito',
//        color  : 'Negrito',
//        estaVacunado : true,
//        edad : 10,
//        vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
//        saludo: function(){
//            return 'wouf wouf wouf..'
//        }
//      }

//   - Luego desarrollar una funcion que liste individualmente los elementos de la propiedad del tipo Array


// 2 - Dado el Siguiente array de personas desarrollar funciones:
//   - Funcion que reciba el array de personas y liste el nombre de cada una.
//   - Funcion que reciba el array de personas y retorne en un array los que son programadores.
//   - Funcion que reciba el array de personas y un id a buscar,
//        retorne la persona en caso de encontrar,
//        caso contrario retorne null
//   - Funcion que reciba el array de personas y un id a buscar,
//        retorne la persona en caso de encontrar,
//        caso contrario retorne null


// [
//     {
//       id: 0,
//       isProgrammer: true,
//       age: 28,
//       name: "Harrington Curry",
//       company: "TRANSLINK",
//       favoriteFruit: "strawberry"
//     },
//     {
//       id: 1,
//       isProgrammer: false,
//       age: 38,
//       name: "Greta Morton",
//       company: "PYRAMI",
//       favoriteFruit: "apple"
//     },
//     {
//       id: 2,
//       isProgrammer: false,
//       age: 32,
//       name: "Hester Bowen",
//       company: "TURNABOUT",
//       favoriteFruit: "apple"
//     },
//     {
//       id: 3,
//       isProgrammer: false,
//       age: 25,
//       name: "Melendez Mcfarland",
//       company: "XSPORTS",
//       favoriteFruit: "strawberry"
//     },
//     {
//       id: 4,
//       isProgrammer: false,
//       age: 31,
//       name: "Kimberly Matthews",
//       company: "KNOWLYSIS",
//       favoriteFruit: "banana"
//     },
//     {
//       id: 5,
//       isProgrammer: false,
//       age: 36,
//       name: "Hardin Sims",
//       company: "SEALOUD",
//       favoriteFruit: "banana"
//     },
//     {
//       id: 6,
//       isProgrammer: false,
//       age: 29,
//       name: "Natalia Huff",
//       company: "ENERSOL",
//       favoriteFruit: "apple"
//     }
//   ]


// Tips

// * Es para que practiquen sintaxis ademas del pensamiento computacional, piensen tipo de datos posibles.
// * Desarrollen y lean enunciados en voz alta, utilicen abstracción, vean las alternativas de llegar al mismo resultado de diferentes formas


// nota : Se recomienda utilizar estructuras y conceptos vistos en la materia
