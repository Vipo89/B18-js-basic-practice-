/* 
EJERCICIO 9:
Genera un array de un determinado tamaño con números aleatorios entre dos valores
y calcula el menor y el mayor de estos números.
Pista: Usar Math.round() y  Math.random() viendo documentación

Ejemplo: 
  exercise09(5, 0, 100) 
  devuelve "The minimum number is 0 and the maximum number is 100 in [0,50,99,49,100]"
*/
export function exercise09(length, start, end) {
  let arrayOfRandomNumbers = [];
  for (let i = 0; i < length; i++) {
    const randomDecimal = Math.floor(Math.random() * (end - start) + start);
    arrayOfRandomNumbers.push(randomDecimal);
  }
  arrayOfRandomNumbers.sort();

  const min = arrayOfRandomNumbers[0];
  const max = arrayOfRandomNumbers[arrayOfRandomNumbers.length - 1];

  return `The minimum number is ${min} and the maximum number is ${max} in ${arrayOfRandomNumbers}`;
}
