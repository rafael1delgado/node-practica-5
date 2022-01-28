/*
Se tiene el objeto "Can" y el objeto "Perro" en el objeto "Perro"
 se debe crear un vínculo con un prototipo hacia el objeto "Can" 
 para mostrar todas sus propiedades y funciones.
*/

let Can = {
    ladra: true,
    cantidadDePatas: 4,
    __proto__: {
        correr() {
            return "corriendo";
        },
        salta() {
            return "saltando"
        }
    }
};

let Perro = {
   nombre:"tornado",
};

// Perro.__proto__["can"] = Can; // forma alterna 🤔
Perro.__proto__.can = Can;

console.log(Perro);
console.log(Perro.__proto__);
console.log("ladra:", Perro.__proto__.can.ladra);
console.log("cantidad de patas:", Perro.__proto__.can.cantidadDePatas);
console.log("correr:", Perro.__proto__.can.__proto__.correr());
console.log("saltar:", Perro.__proto__.can.__proto__.salta());
