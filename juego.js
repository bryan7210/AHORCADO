let contarfallos = 0;
const palabras = ["perro", "vaca", "casa", "carro","moto","emoji","agua","teclado","celular","pantalla","vidrio","codigo","bicicleta","gato","video","foto","sonido","puerta"];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraconguiones = palabra.replace(/./g,"_ ");

id('output').innerHTML = palabraconguiones; 

const button =id('calcular');
button.addEventListener("click",jugar);

function jugar() {
    let letra=id("letra").value;
    letra=letra.toLowerCase();

    let hafallado=true;

    for (const i in palabra){
        if (letra == palabra[i]){
            palabraconguiones =reemplazar(palabraconguiones,i*2,letra);
            hafallado = false;

        }
    }
    if(hafallado){
        contarfallos++;
         moveImg();
        if (contarfallos>2){
         moveImg2();       
        }
        if (contarfallos>=5){
         msjperdio();
         button.disabled=true
        }
    }else{
        if(palabraconguiones.indexOf("_")< 0) {
            msjgano();
            button.disabled=true;
        }
    }
    id("output").innerHTML = palabraconguiones;
}
function reemplazar(palabra,index, character){
    return(
        palabra.substring(0, index)+
        character+
        palabra.substring(index + character.length)
    );
};
function msjperdio(){
     id("resultado").innerHTML="perdiste, te has ahorcado ☠️"
     id("resultado").style.backgroundcolor="#740707";
}
function msjgano(){
     id("resultado").innerHTML="Ganaste 😎"
     id("resultado").style.backgroundcolor="#0c5ca7"
}
function moveImg(){
     id("ahorcado").style.backgroundPosition=-(280*contarfallos)+"px 0px";
}
function moveImg2(){
    id("ahorcado").style.backgroundPosition=-(298*contarfallos)+"px 322px";
}
function id(variable){
    return document.getElementById(variable);
}