//String Methods - Replace, Slice y Substring
console.log("                   String Methods - Replace, Slice y Substring");
const producto8 = "Notebook 15.6 pulgadas";

//Reemplazar caracteres (Replace)
console.log(producto8);
console.log(producto8.replace("pulgadas",'"'));
console.log(producto8.replace("Monitor", "Monitor curvo"));

//Cortar caracteres (Slice)
//Un argumento: inicio de corte y fin
console.log(producto8.slice(0,8));
//Dos argumentos: inicio de corte
console.log(producto8.slice(9));
//Si el primer numero es mayor al segundo no hará nada

//Alternativa a slice
//Utilizando substring si el segundo argumento es menor al primero son invertidos
console.log(producto8.substring(2,11));

//Útil para obtener el primer caracter de un usuario, por ejemplo:
const usuario1 = "Marcos";
console.log(usuario1.substring(0,1));

//Obtener un caracter en un index especifico
console.log(usuario1.charAt(0)) 
