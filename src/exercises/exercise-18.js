/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite en el string cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}

Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/

export function exercise18(string) {
  // Escribe tu solución aquí
  const text = string.toLowerCase();
  const letters = {};

  text.split("").forEach(e => {
    if (e !== " ") { 
      if (letters[e]) {
        letters[e] += 1;
      } else {
        letters[e] = 1;
      }
    }
  });
  return letters;
}