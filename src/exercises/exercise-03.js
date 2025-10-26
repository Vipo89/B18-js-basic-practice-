/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>” 
Nota: vowels = "aeiou" (no incluyas acentos)
*/
export function exercise03(string) {
  const vowels = "aeiou";
  let result = 0;
  //We convert the entire string into an array for each letter.
  string.split("").forEach((letter) => {
    //If the variable vowels contains that letter from the string, then we add 1 to result.
    if (vowels.includes(letter.toLowerCase())) {
      result += 1;
    }
  });
  return `Number of vowels in '${string}' is ${result}`;
}
