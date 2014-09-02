//script para validar cuantos dijitos tiene un numero ingresado por
//el usuario

var numero;

numero = parseInt(prompt("Ingresa un numero", 0));

if (numero<10)
{
	document.write("el numero ingresado es de un digito");
}
else
{
	document.write("el numero ingresado es de 2 digitos");
}