/* 
EJERCICIO 13:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con el título y la descripción 
de las mejores peliculas ordenadas de mejor a peor, siendo las mejores aquellas cuya 
valoración es superior a la valoración media de todas las películas
*/
export function exercise13(movies) {
  let sum = 0;
  console.log(movies);


  movies.forEach((movierat) => {
    sum += movierat.rating;
  });
  const average = sum / movies.length;

 
  const validmovies = [];
  movies.forEach((selectedmovies) => {
    if (selectedmovies.rating >= average) {
      validmovies.push(selectedmovies);
    }
  });
 
  validmovies.sort((a, b) => b.rating - a.rating);
  const result = [];
  validmovies.forEach((movie) => {
    result.push({
      title: movie.title,
      description: movie.description,
    });
  });
  return result;
}
