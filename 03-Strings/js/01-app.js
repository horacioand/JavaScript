// String (Cadenas de caracteres) --> Texto
console.log("                   Strings")
//Los strings se escriben entre comillas simples '' o dobles ""
const producto = "Monitor 24 pulgadas";             //Forma estándar
const producto2 = String("Monitor 22 pulgadas");    //Casteo explícito
const producto3 = new String("Monitor 27 pulgadas") //Nueva variable del objeto string

console.log(producto);
console.log(producto2);
console.log(producto3);

//Para escapar un caracter dentro de un string se utiliza la barra invertida \
const producto4 = "Monitor 24\"";
console.log(producto4);