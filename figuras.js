// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, ladoo2, base) {
    return lado1 + ladoo2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) /2;
}
console.log("El area del triángulo es:" + areaTriangulo + "cm^2");

// Triangulo isoceles
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

console.groupEnd();




// Código del Círculo
console.group("Círculo");


// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
//const PI = 3.1416;
const PI = Math.PI;
console.log("PI es:" + PI);


// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

// aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;

 const perimetro = perimetroCuadrado(value);
 alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
   
    const area = areaCuadrado(value);
    alert(area);
}  


// funcines triangulo
function calcularPerimetroTriangulo() {
    const input1 = parseInt(document.getElementById("InputTriangulo1").value);
    const input2 = parseInt(document.getElementById("InputTriangulo2").value);
    const base = parseInt(document.getElementById("InputBaseTriangulo").value);

    const perimetro = perimetroTriangulo(input1,  input2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = parseInt(document.getElementById("InputBaseTriangulo").value);
    const altura = parseInt(document.getElementById("InputTrianguloAltura").value);

    const area = areaTriangulo(base, altura);
    alert(area);
}

// Triangulo isosceles
function alturaTrianguloIsosceles() {
    const ladoA = parseInt(document.getElementById("InputtrianguloGrandeLadoA").value); 
    const ladoB = parseInt(document.getElementById("trianguloGrandeLadoB").value); 
    const ladoBase = parseInt(document.getElementById("trianguloGrandeLadoBase").value); 

    const altura = alturaIsosceles(ladoA, ladoB, ladoBase);
    alert(altura);
}

// funciones circulo
function calcularPerimetroCirculo(){
    const radio = parseInt(document.getElementById("InputCirculo").value);

    const perimetro = Math.floor(perimetroCirculo(radio));
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = parseInt(document.getElementById("InputCirculo").value);

    const area = Math.floor(areaCirculo(radio));
    alert(area);
}



// Triangulo isoceles
function calcularAlturaIsosceles() {
    const inputL1 = document.getElementById("InputIsoscelesL1");
    const valueL1 = parseInt(inputL1.value);
    const inputL2 = document.getElementById("InputIsoscelesL2");
    const valueL2 = parseInt(inputL2.value);
    const inputIsoscelesBase = document.getElementById("inputIsoscelesBase");
    const valueBase = parseInt(inputIsoscelesBase.value);

    if(valueL1 === valueL2 && valueL1 !== valueBase) {
        const altura = Math.sqrt((valueL1**2)-((valueBase**2)/4));
        alert("la altura es: "+Math.round(altura*100)/100);
    }

}