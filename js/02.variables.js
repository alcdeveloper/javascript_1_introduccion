// La variables ctrl + 

// variables

// variables numericas
var numero = 5;
console.log("numero", numero);

// variables de texto
var palabra ="texto";
console.log("palabra", palabra);

// variables boolean

var boleana = false;
console.log("boleana", boleana);

// variables de tipo array

var colores =["rojo","azul","amarillo","verde",boleana,palabra,numero];
console.log("colores", colores);
console.log("colores", colores[0]);

//variables de tipo objeto

var jugo={
	ingrediente1:"fresa",
	ingrediente2:"mandarina",
	ingrdiente3:"Banana"
};

console.log("jugo", jugo);
console.log("jugo1", jugo.ingrediente1);


// variables dom
var caja=document.querySelector("#caja");
console.log("caja", caja);

caja.style.width="200px";
caja.style.height="200px";
caja.style.background="red";

var cajas=document.querySelectorAll(".cajas");
console.log("cajas", cajas);