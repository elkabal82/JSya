//script para ver cual de 2 numeros son mas grandes

var num1, num2, suma, resta, multiplicacion, divicion;

num1 = parseInt(prompt("Ingresa el primer valor",0));
num2 = parseInt(prompt("ingresa el segundo valor",0));


if(num1>num2)
{
	document.write(num1 + " Es mayor que " + num2 + "<br />");
	suma = num1 + num2;
	resta = num1 - num2;
	document.write("La suma es " + suma + "<br />");
	document.write("La resta es " + resta);
}
else
{
	document.write(num2 + " Es mayor que " + num1 + "<br />");
	multiplicacion = num1 * num2;
	divicion = num2/num1
	document.write("La multiplicacion es " + multiplicacion + "<br />");
	document.write("La divicion es " + divicion);
}


