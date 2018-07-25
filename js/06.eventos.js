var recuadro = document.querySelector("#recuadro");

function cambiarColor(){
	recuadro.style.background = "red";
}


///Eventos dfesd javascript

var boton = document.querySelector("#boton");

boton.addEventListener("click",moverCaja);


function moverCaja(){
	recuadro.style.width ="500px";
	recuadro.style.transition = "1s width ease";
}