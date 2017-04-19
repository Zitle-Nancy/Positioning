// ponemos el indice cero porque class es arreglo y como solo tenemos un elemento
// pues debemos de identificar en que indice va  a trabajar
var contenedor = document.getElementsByClassName('contenedor')[0];
console.log(contenedor);
var rosa = document.getElementById('rosa');
var azul = document.getElementById('azul');
var verde = document.getElementById('verde');
var amarillo = document.getElementById('amarillo');

//le damos propiedades a las cajas 
contenedor.style.position = "relative";
contenedor.style.background = "DarkGray";
contenedor.style.width = "600px";
contenedor.style.padding = "50px";

azul.style.position = "absolute";
azul.style.top = "250px";
azul.style.right = "0";