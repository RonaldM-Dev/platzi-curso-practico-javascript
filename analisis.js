// Helpers, utils funciones que no son parte logica del negicio
function esPar(numero) {
    return (numero % 2=== 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
     return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return  mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana General
const salariosEls = elSalvador.map(
    function(persona){
        return persona.salary;

    }
);

const salariosElsSorted = salariosEls.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralEls = medianaSalarios(salariosElsSorted);

// Mediana del top 10%
const spliceStart = (salariosElsSorted.length * 90) / 100;
const spliceCount = salariosElsSorted.length - spliceStart;

const salariosElsTop10 = salariosElsSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10lEls = medianaSalarios(salariosElsTop10);

console.log({
    medianaGeneralEls,
    medianaTop10lEls,
});