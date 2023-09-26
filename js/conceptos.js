// creando conceptos
/*
var Automodelo = "March";
var Automotor = 1.2;
var Autocolor = "Azul";
var Autoanio = "2018";
document.write(Automodelo);*/
/*
var auto = {
    nombre: 'March',
    motor: '1.6',
    color: 'Verde',
    anio: 2018
}
console.log(auto);
console.log(auto.nombre);
console.log(auto.color);
document.write(auto.color);

//arreglos
var ligamx = ['Cruz','Chivas','America'];
console.log(ligamx);
console.log(ligamx[2]);
console.log(ligamx.length);
console.log(ligamx[3]);

//Quitare el último elemnto
ligamx.pop();
console.log(ligamx[3]);

//Quitar algún elemento especifico
ligamx.splice(1,2);
console.log(ligamx);

//Agregar un elemento en la ultima posición
ligamx.push("Atlas");
ligamx.push("Toluca");
console.log(ligamx);
 // Agregar un elemento primera posición

 ligamx.unshift("Pumas");
 console.log(ligamx);

 ligamx.splice(2,1, "Santos");
 console.log(ligamx);

 //numeros
 var numero1 = "15";
 var numero2 = 20;
 var numero3 = 21.5
 var numero4 = "12.1458412";
 var numero5 = 301455;
 var numero6 = true;
 

 console.log(typeof(numero1));
 console.log(typeof(numero2));
 console.log(typeof(numero3));
 console.log(typeof(numero4));
 console.log(typeof(numero5));
 console.log(typeof(numero6));

 var numero7 = parseFloat(numero4);
 console.log(typeof(numero7));
 console.log(numero7.toFixed(2));//poner numero de decimales*/

 //fechas/*
 /* var fecha = new Date();
  console.log(fecha);
  console.log("el año actual es: " + fecha.getFullYear());
  console.log("El día actual es: "+fecha.getDay());
  console.log("La fecha actual es: "+fecha.getDate());
  console.log("La hora actual es: "+fecha.getHours()+":"+fecha.getMinutes());
  console.log("El mes actual es: "+fecha.getMonth());

  var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  console.log("La fecha actual es "+fecha.getDate()+" de "+meses[fecha.getMonth()]+" de "+fecha.getFullYear());*/

  /**String */
    /*
  var texto = "Esto es una cadena de texto";
  console.log(texto);
  console.log(typeof(texto));

  console.log(texto.toLocaleUpperCase());//Aparece en Mayúsculas
  console.log(texto.length);//Ver cantidad de caracteres
  console.log(texto.split(" "));//convierte un string a arreglo
  console.log(texto.indexOf("cadena"));//Buscar un caracter o texto específico
  console.log(texto.slice(0,8));// elimina texto de la posición
  var texto2 = "HOLA MUNDO";
  console.log(texto2.toLocaleLowerCase());//cambiar el texto a minúscula
  */

  /**IF */
  /*var número = prompt ("Dame un número");
  if (número > 8) {
    console.log("El número proporcionado es mayor a 8");
  }else{
    console.log("El número proporcionado es menor a 8")
  }
*//*
 var numero = prompt("Ingrese un número");
  if (numero%2==0){
    console.log("El número es par");
  }else{
    console.log("El número es impar");
  }*/

  //tarea crear una lista de números del 1 al 100 con un for;
  var text1 = "UT";
  var text2 = "Ingeniería";
  for (let i = 0; i < 100; i++) {
    if(i%3==0 && i%5==0){
        console.log(text1+" "+text2);
    }else{
        if(i%3==0){
            console.log(text1);
        }else{
            if(i%5==0){
                console.log(text2);
            }else{
                console.log(i);
            }
        }
    }
    
    


  }
  //cuando aparezca un número divisible entre 3 mostrar palabra UT
  // 5 INGENIERÍA
/*
    var metododepago = "efectivo";

    switch (metododepago) {
        case 'TC':
            console.log("pago con tarjeta de crédito");
            break;
        case 'efectivo':
            console.log("pago con efectivo");
            break;
        case 'Paypal':
                console.log("pago con paypal");
                break;
    
        default:
            console.log("metodo de págo inválido");
            break;
    }

    //operaciones
    /*
    var numero10 = 20;
    numero10 = numero10 + 20;
    console.log(numero10);
    numero10+=20;
    console.log(numero10);
    numero10-=20;
    console.log(numero10);
    numero10*=20;
    console.log(numero10);
    numero10/=20;
    console.log(numero10);
*/
    
    
    

