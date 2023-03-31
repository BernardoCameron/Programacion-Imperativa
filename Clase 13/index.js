/*
    CONSIGNA:
    Integración de contenido:

    1. Crear un array llamado misMascotas.
    2. Dentro de este array crearemos un objeto para cada mascota. Cada
       objeto deberá tener:
        ● nombre
        ● raza
        ● edad
        ● sonido
        ● un método que nos retorne ese sonido 2 veces
        -> Cuando esté listo, verificar en consola.
    3. Deberemos crear una función que se llame aumentarEdad que aumente
       la edad de cada animal en 1.
    4. Ahora debemos crear otra función, que se llame  aumentarEdad2, que
       va a hacer un trabajo más fino:
        ● Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
        ● Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
        ● Si la mascota tiene más de 10 años, deberá sumarle la mitad de
          su edad
    5. Ahora crearemos una función que va a generar un identificador (ID)
    en cada objeto, que será secuencial y que empezará en 1.
    6. Por último eliminaremos la propiedad "raza", ya que para nosotros
       todos los animalitos son iguales
*/

// const misMascotas = [{
//     nombre: "Sofi",
//     raza: "Kiltro",
//     edad: "Quien sabe cuantos",
//     sonido: "Guaf guaf",
//     quieroComida: function () {
//         console.log(this.sonido);
//     }
// },
// {
//     nombre: "Sara",
//     raza: "Blanco",
//     edad: "1 o 2",
//     sonido: "RAUUUUUUUUUUUUUUUUUUUL RAUUUUUUUUUUUUL",
//     quieroComida: function () {
//         return this.sonido
//     }
// },]
// misMascotas.quieroComida()

// Deberemos crear una función que se llame aumentarEdad que aumente
//  la edad de cada animal en 1.

const aumentarEdad = (edad) => {
    for (let i = 0; i < misMascotas.length; i++) {
        console.log(misMascotas.length);

    }

}