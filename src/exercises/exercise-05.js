/* 
EJERCICIO 5:
Escribe una función que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
  exercise05('code') // result: "COoDddEeee"
  exercise05('list') // result: "LIiSssTttt"
  exercise05('function') // result: "FUuNnnCcccTttttIiiiiiOooooooNnnnnnnn"
*/
export function exercise05(string) {
  // Escribe tu solución aquí
  let result = "";
  //We convert the string into an array and do a foreach
  string.split("").forEach((letter, idx) => {
    //We put the first capital letter in a repeat variable and add the same letter for the index number it is at.
    let repeat = letter.toUpperCase() + letter.toLowerCase().repeat(idx);
    result += repeat;
  });
  return result;
}
