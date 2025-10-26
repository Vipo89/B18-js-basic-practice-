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

  //Filter by actors
  actors.forEach((actor) => {
    const actorMovies = movies.filter((m) => m.actors.includes(actor));

    if (actorMovies.length > 0) {
      //We filter and search for the movie with the highest rating for those actors.
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
  //When we have them, we return the result.
  return bestMovies;
}
