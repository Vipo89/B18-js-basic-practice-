/* 
EJERCICIO 19:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje.

Ejemplos:
"the string 'Code deco' is an isogram"
"the string 'hello world' is not an isogram"
*/

import { exercise18 } from "./exercise-18";

export function exercise19(string) {
  // Escribe tu solución aquí

  const stringProcessed = exercise18(string);

  const nCopyLetters = Object.values(stringProcessed);
  const nFirst = nCopyLetters[0];
  const isIsogram = nCopyLetters.every((count) => count === nFirst);

  return `the string '${string}' is ${isIsogram ? "" : "not "}an isogram`;
}

//No he usado esta función porque teniendo en cuenta que el anterior ejercicio me devolvía ya el número de veces
//Que se repetía, simplemente me era más fácil comprobar si todas se repetían lo mismo o no.
function lettersOcurrences(string) {
  // Función ayudante sugerida que devuelve un objeto
  // donde las claves son las letras y los valores son
  // el número de veces que aparecen en la cadena (string)
}
