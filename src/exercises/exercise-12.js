/* 
EJERCICIO 12:
Escribe una función que pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js" devuelve un array con el título de las 
películas ordenadas alfabéticamente por el título.

Consejo: 
puedes definir en utils.js una función auxiliar para ordenar las cadenas
que recibe como parámetro dos cadenas y devuelve -1 si la primera es menor que la segunda, 
0 si son iguales y 1 si la primera es mayor que la segunda.
*/
export function exercise12(movies) {
  // Escribe tu solución aquí
  //Here we create a variable, but by sorting the movies by name, localeCompare already ignores upper and lower case letters, so there is no need to use tolowercase.
  const orderedMovies = [...movies].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  //We return only the titles of the movies, listed alphabetically.
  return orderedMovies.map((movie) => movie.title);
}

function sortStrings(a, b) {
  const string1 = a.toLowerCase();
  const string2 = b.toLowerCase();

  if (string1 < string2) return -1;
  if (string1 > string2) return 1;
  return 0;
}
