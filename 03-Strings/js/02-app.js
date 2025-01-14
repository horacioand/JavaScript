// Metodos de los strings
console.log("                   String Methods - Length, indexOf, includes")
const producto5 = "Monitor 20\"";

//Conocer la cantidad de caracteres (largo) del string
console.log(producto5);
console.log(producto5.length);

// Buscar si el string contiene el argumento de la funcion 
// (la posición (resultado) es la primer letra que contiene el argumento)
// En caso de no tener el resultado sera -1
console.log(producto5.indexOf("20"));

// Analizar si la variable contiene la palabra ingresada en el argumento
// --> Retorna un booleano
console.log(producto5.includes("Monitor"));