// app.js
// Objeto de tasas de cambio
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};
// Función: de euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};
// Función: de dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
};
// Función: de yenes a libras
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
};
// Ejemplo de función adicional
const sum = (a, b) => a + b;
// Exportamos todas las funciones
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};