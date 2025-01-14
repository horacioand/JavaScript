// Concatenar 2 strings en uno solo
console.log("                   String Methods - Concatenar")
const producto6 = "Monitor 24 pulgadas";
const precio = "110 USD"

// Concatenar 2 variables
console.log(producto6.concat(" ", precio));
//Concatenar una variable con un string 
console.log(producto6.concat(" En descuento"));
//Concatenar múltiples datos
console.log(producto6.concat(" ",  precio, " en descuento!"));
//Concatenar sin funcion concat
console.log(producto6 + " con un precio de " + precio);
//Es válido concatenar tanto con + como con ,

//ECMASCRIPT 6 trajo una nueva forma de concatenar, template literals
console.log(`El producto ${producto6} tiene un precio de $ ${precio}`);