// 1. Descargar y analizar el siguiente archivo, el cual contiene la lista de clientes
// (cuentas bancarias).

// 1

// 2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
// propiedad llamada “clientes” que estará compuesta de la lista de objetos
// obtenidos en el punto anterior.
const banco2 = {
  clientes: []
}

// 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
// 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// nuevo saldo es: XXXX”.
// 5. Crear un último método llamado extracción que recibirá también dos parámetros:
// el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
// correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
// menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
// De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
// saldo es: XXXX”.
// Si llegaste hasta acá, felicidades, el equipo de desarrollo y el tech leader están
// impresionados con tu trabajo.

let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

const banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === titular) {
        return this.clientes[i];
      }
    }
  },
  deposito: function (titular, cantidadDeposito) {
    let cliente = this.consultarCliente(titular)
    console.log(`Deposito realizado, su nuevo saldo es: ${cliente.saldoEnPesos + cantidadDeposito}`);
  },
  extraccion: function (titular, cantidadRetiro) {
    let cliente = this.consultarCliente(titular)
    if (cliente.saldoEnPesos < cantidadRetiro) {
      return `Fondos insuficientes`
    }
    else {
      return `Extraccion realizada correctamente, su nuevo saldo es: ${cliente.saldoEnPesos - cantidadRetiro}`;
    }
  },
}
//console.log(banco.deposito("Jacki Shurmer", 3000));
//let clienteDepositado = banco.deposito("Jacki Shurmer", 5000)
//console.log(clienteDepositado);

console.log(banco.extraccion("Jarret Lafuente", 3000));


