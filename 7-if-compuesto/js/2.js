//escript que indica si el promedio es mayoa x numero manda algo
//de lo contrario madna otra cosa


var cal1, cal2, cal3, promedio;

cal1=parseInt(prompt("Ingresa la primera calificacion",0));
cal2=parseInt(prompt("Ingresa la segunda calificacion",0));
cal3=parseInt(prompt("Ingresa la tercera calificacion",0));

promedio=(cal1+cal2+cal3)/3;

document.write("El promedio es = " + promedio + "<br />");

if (promedio >= 4)
{
	document.write("REGULAR");
}
else
{
	document.write("REPROBADO");
}