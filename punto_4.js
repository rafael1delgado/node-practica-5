/*
Este string "fooziman" se debe proyectar de la siguiente forma "fOozimAn" 
NOTA: con la segunda letra en upper y la ante  penúltima en upper.
*/

let str = "fooziman";

let strUpper = [...str];

strUpper[1] = strUpper[1].toUpperCase();
strUpper[6] = strUpper[6].toUpperCase();

str = strUpper.join('');

console.log(str);
