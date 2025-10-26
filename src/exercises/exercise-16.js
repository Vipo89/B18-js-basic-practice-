/* 
EJERCICIO 16:
Escribe una función que devuelva un array que solo incluya el titulo de la pelicula mejor valorada de cada uno de estos actores: 
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks

Nota: asegurate que no hay titulos duplicados
*/

export function exercise16(movies) {
  const actors = ["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"];
  const bestMovies = [];


  actors.forEach((actor) => {
    const actorMovies = movies.filter((m) => m.actors.includes(actor));

    if (actorMovies.length > 0) {

      const bestMovie = actorMovies.reduce((max, movie) => {
        if (movie.rating > max.rating) {
          return movie;
        } else {
          return max;
        }
      });

      bestMovies.push(bestMovie.title);
    }
  });

  return bestMovies;
}
