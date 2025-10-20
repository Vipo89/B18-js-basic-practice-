/* 
EJERCICIO 10:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar funciones auxiliares de ejercicios anteriores si las declaraste.
*/
export function exercise10(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split(''); 
  const position = [];

  const letters = string.toLowerCase().split('');

  letters.forEach((stringlett) => {
    alphabetArray.forEach((letter, j) => {
      if (stringlett === letter) {
        position.push(j + 1); 
      }
    });
  });

  return position;
}