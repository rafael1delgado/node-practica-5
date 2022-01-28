/*
Determinar con un loop/ciclo en el array de personas cuantas 
son mayores de edad y cuantas menores de edad, adicional decir 
el total de personas que compone el array.
*/

let personas = [{
        nombre: "foo",
        edad: 18
    },
    {
        nombre: "bar",
        edad: 17
    },
    {
        nombre: "zap",
        edad: 40
    },
    {
        nombre: "qux",
        edad: 19
    }
];

let totalMayorEdad = 0;
let totalMenorEdad = 0;
let totalPersonas = 0;
let length = Object.keys(personas).length; // tengo mis dudas si esta bien o no

for(let i = 0; i < length; i++) {
    if(personas[i].edad >= 18) {
        totalMayorEdad++;
    } else {
        totalMenorEdad++;
    }
    totalPersonas++;
}

console.log("Total de Personas Mayor de Edad:", totalMayorEdad);
console.log("Total de Personas Menor de Edad:", totalMenorEdad);
console.log("Total de Personas:", totalPersonas);
