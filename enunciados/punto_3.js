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
