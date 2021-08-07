function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
     return promedioLista;
}


const lista1 = [
    100,
    700,
    200,
    90,
    800,
    500,
    400000000,
    1000,
]

lista1.sort(function (a,b) {
    return a-b;
});
 

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
 
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;
    // necesitamos dos elementos
    // -> el promedio
    // -> mediana 

} else {
    mediana = lista1[mitadLista1];
    // posicion mitadLista1 dentro lista1
    // -> mediana
}