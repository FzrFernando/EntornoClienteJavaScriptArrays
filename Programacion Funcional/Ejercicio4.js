let numeros = [1,2,3,4,5,6,7,8,9];

let pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);

let cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados);

let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
console.log(suma);

let mayorQueCero = numeros.every(numero => numero > 0);
console.log(mayorQueCero);

let mayorQueDiez = numeros.some(numero => numero > 10);
console.log(mayorQueDiez);