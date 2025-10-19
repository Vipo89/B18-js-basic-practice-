/* 
EJERCICIO 2:
Muestra el siguiente mensaje dependiendo de si un número es par o impar:
“Number 34 is even” ó “Number 13 is odd”
Nota: even = par | odd = impar
*/
export function exercise02(number) {
  let result;
  //If the remainder of the division by two is 0, it means that the number is even.
  if (number % 2 == 0) {
    result = "even";
    //Otherwise, it is odd
  } else {
    result = "odd";
  }
  return `Number ${number} is ${result}`;
}
