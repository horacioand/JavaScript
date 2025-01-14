// Repeat y split
console.log("                   String Methods - Repeat y Split")
const producto9 = "TV Smart";
//Repeat permite repetir una cadena de texto
const texto = "En promocion ".repeat(3);
console.log(texto);
//ejemplo con sintaxis ``
console.log(`${producto9} ${texto} !!!`);

//Split - Permite dividir un string, se pasa por argumento el caracter a cortar

const texto1 = "Necesito cortar este texto";
console.log(texto1);
console.log(texto1.split(" "));

const hobbies = "Caminar, Entrenar, Leer, Películas";
console.log(hobbies);
console.log(hobbies.split(",")) 