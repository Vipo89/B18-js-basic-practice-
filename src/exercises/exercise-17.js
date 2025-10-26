/* 
EJERCICIO 17:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "This is a hashtag" se transforma en "#ThisIsAHashtag"
*/

export function exercise17(string) {

  const phrasesplitted = string.split(" ");

  const phraseAdded = phrasesplitted.map(
    (w) => w.charAt(0).toUpperCase() + w.slice(1)
  );

  
  return "#" + phraseAdded.join("");
}
