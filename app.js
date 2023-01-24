// console.log("Hello World")

// this is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7, 3))

// // export the function to be used on other files 
// // (similar to the keyword `export` when using webpack)
// module.exports = {
//     sum
// };


// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // convertimos el valor a dolares
    let valueInYen = valueInDollar / 1.2 * 127.9;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // convertimos el valor a dolares
    let valueInPound = valueInYen / 127.9 * 0.8;
    // retornamos el valor
    return valueInPound;
}

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
}