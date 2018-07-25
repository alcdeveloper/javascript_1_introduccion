var tiempo= document.querySelector("#tiempo");

var segundos =0;

// Setinterval
// setInterval(function,tiempo);

var intervalo= setInterval(function(){
	segundos++;
	tiempo.innerHTML = segundos;
},1000)



//setTimeout

setTimeout(function(){

	clearInterval(intervalo);
},5000);