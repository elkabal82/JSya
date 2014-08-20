//el ultimo ejercicio para aprender el prompt, parseInt y document.write
var precio;
var cantidad;
var total;
var cambio;
var efectivoCliente;

precio = parseInt(prompt("Cuanto cuesta:$"));
cantidad = parseInt(prompt("Cuantos son:"));
total = cantidad * precio;

document.write("El total a pagar es:$" + total +"<br>");
efectivoCliente = parseInt(prompt("Cuanto nos dio"));

cambio = efectivoCliente - total;

document.write("Su cambio es: $" + cambio);