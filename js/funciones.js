function saltodelinea() {
    document.write("<br> <br> <br>");
}
//funcion que no recibe parametros
//document.write("Oscar");
//saltodelinea();
//document.write("Arellano");
//saltodelinea();
//document.write("Miguel");

//funcion que recibe parametro y no retorna nada
function imprimir(frase) {
document.write(frase);
saltodelinea();
}

//imprimir("Oscar");
//imprimir("Arellano");
//imprimir("Miguel");
//imprimir(35);

//Funciones que reciben parametros y retornan valores
function CalculadoraImc(nombre, peso, altura) {
    let imc = peso/(altura*peso);
    imprimir("El IMC de: "+nombre+" es de: "+imc);
}
let nombre = prompt("Cual es tu nombre: ");
let peso = prompt("¿Cuál es su peso?: ");
let altura = prompt("¿Cuál es su altura?: ");

CalculadoraImc(nombre, peso, altura);

