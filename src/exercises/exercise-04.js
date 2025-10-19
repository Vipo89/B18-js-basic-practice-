/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
Pasándole el string “Hi, I am learning Javascript” la función debe devolver “H,I m lrnng Jvscrpt”
Nota: vowels = "aeiouAEIOU" (no incluyas los acentos)
Atención: cuidado con vocales aisladas y con espacios en blanco dobles
*/
export function exercise04(string) {
  const vowels = "aeiouAEIOU";
  
  //We convert the string into a string of arrays, then check if any vowels are in letter. 
  // If so, we delete them and then rejoin the string. 
   return string.split("").filter(letter => !vowels.includes(letter)).join("");
}
