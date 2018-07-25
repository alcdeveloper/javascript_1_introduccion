// Condiciones

var a = 5;
var b = 10;


if(a > b){
	console.log("A es mayor que B");
} else if(a == b){
	console.log("A es igual que B");
} else{
	console.log("A es menor que B");
}

//CAMBIOS


var dia ="Lunes";

switch(dia){
	case "Lunes":
		console.log(dia);
	break;

	case "Martes":
		console.log(dia);
	break;

	case "Miercoles":
		console.log(dia);
	break;

	case "Jueves":
		console.log(dia);
	break;

	case "Viernes":
		console.log(dia);
	break;

	case "Sabado":
		console.log(dia);
	break;

	case "Domingo":
		console.log(dia);
	break;
	default:
	console.log("error");
	break;
}


