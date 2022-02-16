/*
Se tiene una Wallet / Billetera virtual, a la que hay que agregarle en la
propiedad criptos del objeto Wallet, 3 critpomonedas, además se tiene que
conocer el total de stableCoin y el total de no stableCoin, si la propiedad 
stableCoin=true indica que es una stableCoin, por último indicar, cuál de 
las 3 criptos tiene mayor reserva de dinero tomando como referencia la 
propiedad del valor con dolar (usd).
*/

const Wallet = {
    criptos: [],
    status: true,
    user: "",
}

let BTC = {
    name: "bitcoin",
    usd: "100",
    btc: "0,0023",
    current: "$42,750.52",
    stableCoin: false
};

let ETH = {
    name: "ethereum",
    usd: "1000",
    eth: "0,31",
    current: "$3,199.91",
    stableCoin: false
};

let USDT = {
    name: "tether",
    usd: "500",
    usdt: "500",
    current: "$1.00",
    stableCoin: true
};
