/*
Se tiene creado un objeto, en el cual se desea agregar 2 propiedades
dentro de su prototipo, las propiedades son: edad: 300, pais:"narnia"
*/

let persona = {
    nombre: "foo"
};

persona.__proto__.edad = 30;
persona.__proto__.pais = "narnia";

console.dir(persona);
console.log(persona.__proto__);
console.log("edad: ", persona.__proto__.edad);
console.log("pais", persona.__proto__.pais);
