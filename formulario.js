let txt1 = document.getElementById("texto1");
let txt2 = document.getElementById("texto2");
let txt3 = document.getElementById("texto3");
let txt4 = document.getElementById("nombre");
    
    console.log(txt1);
    console.log(txt2);
    console.log(txt4);

txt1.textContent="UNIVERSIDAD";
txt2.innerHTML="LOS LIMONES";
txt3.textContent= txt1.textContent+" "+txt2.textContent; 