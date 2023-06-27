const consumoCar = 12;

function gastoGasolina(tempoGasto, velocidadeMedia) {
    return (tempoGasto * velocidadeMedia) / consumoCar;
}

console.log(gastoGasolina(10, 85).toFixed(3));
console.log(gastoGasolina(2, 92).toFixed(3));
console.log(gastoGasolina(22, 67).toFixed(3));