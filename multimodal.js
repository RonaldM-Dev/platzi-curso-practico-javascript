//Multimodal: Cuando mas de 2 datos se repiten varias veces.
// Datos desagrupados

// La moda del conjunto en este caso serían
// tres números, porque los tres se repiten
//el mismo número de veces: 6,28,40.

const numero = [28,30,6,40,28,19,40,40,16,14,6,32,6,28,];


function buscarRepetidos(array) {
    let aux = [];

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] === array[j] && !aux.includes(array[1])) {
               aux.push(array[1]);
                
               
            }
        }
    }

    return aux;
}

// const repeticionNumero = [6,28,40];

// numero.map(
//     function(elemento) {
//         if ( repeticionNumero[elemento]) {
//             repeticionNumero[elemento] += 1;
//         } else {
//             repeticionNumero[elemento] = 1; 
//         }
       
//     }
// );

// const numeros = Object.entries(repeticionNumero).sort(
//     function (elementoA, elementoB) {
//         return elementoA[1] - elementoB[1];
//     }
// );


// const multimodal = numeros[numeros.length -1];