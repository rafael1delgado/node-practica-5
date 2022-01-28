/*
Se tiene una Wallet / Billetera virtual, a la que hay que agregarle en la
propiedad criptos del objeto Wallet, 3 critpomonedas, además se tiene que
conocer el total de stableCoin y el total de no stableCoin, si la propiedad 
stableCoin=true indica que es una stableCoin, por último indicar, cuál de 
las 3 criptos tiene mayor reserva de dinero tomando como referencia la 
propiedad del valor con dolar.
*/

const Wallet = {
    criptos: [],
    status: true,
    user: "",
    setCriptos(criptos) {
        criptos = criptos;
    },
    getCriptos() {
        return criptos;
    },
    totalStableCoin() {
        var stableCoins = [];
        stableCoins = criptos.filter(e => (e.stableCoin == true));
        return stableCoins.length;
    },
    totalNoStableCoin() {
        let noStableCoins = criptos.filter(e => (e.stableCoin == false));
        return noStableCoins.length;
    },
    indexCriptoMayorReservaDinero() {
        let max = Number(criptos[0].usd);
        let indexCripto = 0;
        for (let i = 0; i < criptos.length; i++) {
            criptoIndex = Number(criptos[i].usd);
            if (criptoIndex > max) {
                max = criptoIndex;
                indexCripto = i;
            }
        }
        return indexCripto;
    },
    getCripto(index) {
        return criptos[index];
    }
};

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

let criptos = [BTC, ETH, USDT];

let noStableCoins = criptos.filter(function (e) {
    if (e.stableCoin == false) {
        return e;
    }
});

Wallet.setCriptos(criptos);
// console.log(Wallet.getCriptos());

console.log("Total Stable Coin:", Wallet.totalStableCoin());
console.log("Total No Stable Coin:", Wallet.totalNoStableCoin());

let indexCripto = Wallet.indexCriptoMayorReservaDinero();
let criptoMayor = Wallet.getCripto(indexCripto);
console.log("Cripto con mayor reserva:", `${criptoMayor.name}`.toUpperCase());
