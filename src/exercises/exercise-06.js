/* 
EJERCICIO 6:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado.

Ejemplos:
"The phrase 'Rats live on no evil star' is palindrome"
"The phrase 'Hello world' is NOT palindrome"

Nota: los signos de puntuación, mayúsculas y espacios deben ser ignorados (no incluyas los acentos). 
*/
export function exercise06(string) {
  // Escribe tu solución aquí
  let stringcleaned = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = stringcleaned.split("").reverse().join("")
return stringcleaned === reversed ? `${string} | is a palindrome` : ` | is NOT a palindrome`
  // return [condición]
  //   ? `The phrase '${string}' is a palindrome`
  //   : `The phrase '${string}' is NOT a palindrome`;
}
