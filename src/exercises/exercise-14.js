/* 
EJERCICIO 14:
Escribe una función que pasándole "movies" y "categories" del archivo data.js
como parámetros filtra las películas que pertenezcan a la categoria "Drama" 
e incluye solo el título y la descripción.
*/
export function exercise14(movies, categories) {
  let moviesCategory = [];

  movies.forEach((movie) => {
    if (movie.category === categories.drama) {
      moviesCategory.push({
        title: movie.title,
        description: movie.description,
      });
    }
  });

  return moviesCategory;
}