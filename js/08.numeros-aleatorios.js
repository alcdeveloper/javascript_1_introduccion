var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero =0;

//Numero Aleatorio

//El objeto math permite realizar operaciones matematicas
//Math.random = genera numero aleatorios
//Math.floor redondea el numero al numero menos del decimal
//Math.ceil = redondeal al numero maximo del decimal
//Math.round = redondea a su numero entero mas proximo

numero =Math.round(Math.random()*10);

console.log("nUMERO ALEATORIO" ,numero);
numeroAleatorio.innerHTML = numero;


