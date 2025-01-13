// Variables con var (Sintaxis antigua)
// Inicializar una variable con un valor
console.log("Variables var")

var nombre = "Pepe Argento";
console.log(nombre);

// Reasignar el valor de una variable
nombre = "Moni Argento";
console.log(nombre);

// JavaScript es un lenguaje dinámico: no se necesita especificar el tipo de dato
nombre = 20;
console.log(nombre);

// Una variable puede ser inicializada sin un valor y asignarlo después
var disponible;
disponible = true;

//Inicializar múltiples variables
var categoria = "Monitores",
    marca = "Samsung",
    precio = 999999;
console.log(categoria,marca,precio);

// Sintaxis de las variables: 
// No pueden iniciar con números, 
// Pueden inicializar con _
// No pueden contener espacios
//var 99dias;
var _99dias;
var _usuario

// Convencion para mas de una palabra: 
// camelCase (mas comun)
var nombreProducto;
// PascalCase
var NombreProducto;
// snake_case
var nombre_producto;
