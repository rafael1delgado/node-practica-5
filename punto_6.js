/*
Hay 2 Objetos: Can y Perro, que deben ser transformados en un esquema de clases,
donde la clase Perro herede las propiedades y funciones de la clase Can y mostrar
todo el perfil del Perro por pantalla / terminal.
*/

// let Can = {
//     ladra: true,
//     cantidadDePatas: 4,
//     correr() {
//         return "corriendo";
//     },
//     salta() {
//         return "saltando"
//     }
// };


// let Perro = {
//     nombre: "tornado",
// };

class Can {
    constructor(raza) {
        this.raza = raza; // añadido para probar la herencia
        this.ladra = true;
        this.cantidadDePatas = 4;
    }

    correr() {
        return "corriendo";
    }

    saltar() {
        return "saltando";
    }
}
class Perro extends Can {
    constructor(raza, nombre) {
        super(raza);

        this.nombre = nombre;
    }
}

let tornado = new Perro("pequines", "tornado");

console.log(tornado);
console.log("nombre:", tornado.nombre);
console.log("ladra:", tornado.ladra);
console.log("cantidad de patas:", tornado.cantidadDePatas);
console.log("correr:", tornado.correr());
console.log("saltando:", tornado.saltar());
