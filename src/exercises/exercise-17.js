/* 
EJERCICIO 17:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "This is a hashtag" se transforma en "#ThisIsAHashtag"
*/

export function exercise17(string) {
  //We convert the string into arrays for each “ ” that exists.
  const phrasesplitted = string.split(" ");

  //We capitalize the first letter of each of these array spaces and leave the rest as they are.
  const phraseAdded = phrasesplitted.map(
    (w) => w.charAt(0).toUpperCase() + w.slice(1)
  );

  //We return the phrase together with the # at the beginning.
  return "#" + phraseAdded.join("");
}
