let contador = document.getElementById("contar");
let sumar = document.getElementById("add");
let restar = document.getElementById("remove");
let reset = document.getElementById("reset");

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero ++;
    contador.innerHTML = numero;
});

restar.addEventListener("click", ()=>{
    numero--;
    contador.innerHTML = numero;   
});

reset.addEventListener("click", ()=>{
    numero=0;
    contador.innerHTML = numero;

});

