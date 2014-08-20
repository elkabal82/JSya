//ejercicio 2 pedir cuatro numero y hacer unas operaciones
var num1, num2, num3, num4, suma, multi;


num1 = parseInt(prompt("Introduce el primer valor",0));
num2 = parseInt(prompt("Introduce el segundo valor",0));
num3 = parseInt(prompt("Introduce el tercer valor",0));
num4 = parseInt(prompt("Introduce el cuarto valor",0));

suma = num1 + num2;
multi = num3 * num4;
document.write("La suma de los 2 primeros valores es: " + suma + "<br>");
document.write(" La multiplicacion del tecero y el cuarto es: " + multi + "<br>");
