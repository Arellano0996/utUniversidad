function imprimir(frase) {
    document.write(frase);
    saltodelinea();
    }

function CalculadoraArea(Altura, Base) {
    let imc = (Altura * Base)/2;
    imprimir("El área del triángulo es: "+imc+"m2");
}
let Altura = prompt("¿Cual es la altura del triángulo?: ");
let Base = prompt("¿Cual es la base del triángulo?: ");


CalculadoraArea(Altura, Base);