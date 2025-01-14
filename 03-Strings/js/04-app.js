// Cortar espacios en blanco de un string
console.log("                   String Methods - Trim")
//Los espacios en blanco cuentan como un caracter
const producto7 = "     Televisor 32 pulgadas     ";

//Para cortar se ultiliza la funcion trim
//Para cortar al inicio
console.log(producto7.trimStart());
//Para cortar al final
console.log(producto7.trimEnd());
//Para cortar ambos los combinamos
console.log(producto7.trimStart().trimEnd());
//Ambas direcciones
console.log(producto7.trim());