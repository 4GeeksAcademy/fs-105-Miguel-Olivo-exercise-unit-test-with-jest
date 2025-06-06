// Importar la función sum del archivo app.js
const { sum } = require('./app.js');
// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
// test.js
// Importamos todas las funciones del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
// Test 1: Euro a Dólar
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected);
});
// Test 2: Dólar a Yen
test("One dollar should be approximately 146.26 yenes", function() {
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yenes).toBeCloseTo(expected);
});
// Test 3: Yen a Libra
test("1000 yenes should be approximately 5.56 libras", function() {
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected);
});