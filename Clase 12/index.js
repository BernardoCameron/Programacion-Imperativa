

const alicia = [10, 80, 75]
const bob = [90, 20, 25]



const concurso = {
    etapas: {
        primerParticipante: [],
        segundoParticipante: []
    },
    ganador: null,
    encontrarGanador: function (array1, array2) {
        let puntosPrimerParticipante = 0
        let puntosSegundoParticipante = 0
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] > array2[i]) {
                this.etapas.primerParticipante.push(array1[i])
                this.etapas.segundoParticipante.push(array2[i])
                puntosPrimerParticipante++
            } else {
                puntosSegundoParticipante++
                this.etapas.primerParticipante.push(array1[i])
                this.etapas.segundoParticipante.push(array2[i])
            }
        }
        console.log(concurso.etapas);
        if (puntosPrimerParticipante > puntosSegundoParticipante) {
            this.ganador = "Alicia";
        } else {
            this.ganador - "Bob";
        }
    },
    exportarResultados: function () {
        let json = JSON.stringify(concurso)
        console.log(json);
    }
}

concurso.encontrarGanador(alicia, bob);
concurso.exportarResultados();
