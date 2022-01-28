/*
https://jsonplaceholder.typicode.com/users 

Mediante la anterior url, se debe acceder al endpoint /users 
para mostrar todos los usuarios, con el uso de la librería axios, 
se debe hacer 2 diseños de consumo de este recurso. 

1 consumirlo con promesas es decir con then(...).catch(...)
2 consumirlo con el formato de diseño async / await

docs:

https://github.com/axios/axios

npm install axios
*/

const axios = require('axios');

let url = 'https://jsonplaceholder.typicode.com/users';

function getUsersOptionOne(url) {
    axios.get(url)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

async function getUsersOptionTwo(url) {
    try {
        const response = await axios.get(url);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

getUsersOptionOne(url);
getUsersOptionTwo(url);
