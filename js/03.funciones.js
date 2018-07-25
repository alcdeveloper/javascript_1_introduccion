var globales = 10;



//fUNCIONES SIN PARAMETROS

function saludo(){
	console.log("Hola");
}


saludo();

//Funciones con parametro

function operacion(dijito1,dijito2){
	var resultado = dijito1+dijito2;
	globales = resultado;
	console.log("resultado", resultado);
}

operacion(5,7);
operacion(10,5);


// Fuciones con retorno

function retorno1(){
	var numero =5;
	return numero;
}

console.log(retorno1());


//funcion con retorno y parametro

function retorno2(numero){

	return numero;
}

retorno2(10);
console.log("retorno2", retorno2(10));
