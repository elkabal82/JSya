//script para sacar el promedio de 3 notas y mandar un mensaje
var cal1;
var cal2;
var cal3;
var promedio;

cal1=parseInt(prompt("cual es la primera calificacion", 0));
document.write("Primera calificacion = " + cal1 + "<br />");
cal2=parseInt(prompt("cual es la segunda calificacion", 0));
document.write("Segunda calificacion = " + cal2 + "<br />");
cal3=parseInt(prompt("cual es la tercera calificacion", 0));
document.write("Tercera calificacion = " + cal3 + "<br />");
promedio=parseInt((cal1+cal2+cal3)/3);
document.write("El promedio es = " + promedio);

if(promedio >= 7)
{
	alert("PROMOCIONADO");
}