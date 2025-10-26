/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Crea 2 funcines que dado un número entero devuelva el Fibonacci de ese número como parámetro. 
La primera función debe ser recursiva y la segunda iterativa.

Ejemplo: Fibonacci(20) = 6765

Nota: evita llamar a la función con números altos en la versión recursiva.
*/

export function exercise20(n) {
  if (n > 20) return "Número demasiado alto";
  //The Fibonacci sequence starting at 0 is 0.
  if (n === 0) return 0;
  //The Fibonacci sequence starting at 1 is 1.
  if (n === 1) return 1;
  //The return calls the function with -1 and -2 respectively, and inside they iterate until they reach 0, and the process is repeated.
  //For example, exercise20Iterative (5) = exercise20Iterative (4) + exercise20Iterative (3).
  // then these decrease, becoming exercise20Iterative (3) and exercise20Iterative (2), until they reach 0 and then return the total value.
  return exercise20Iterative(n - 1) + exercise20Iterative(n - 2);
}

export function exercise20Iterative(n) {
  //The Fibonacci sequence starting at 0 is 0.
  if (n === 0) return 0;
  //The Fibonacci sequence starting at 1 is 1.
  if (n === 1) return 1;

  let n1 = 0;
  let n2 = 1;
  let nhold = 0;

  for (let i = 2; i <= n; i++) {
    //nhold is the “total,” so we add the previous numbers.
    nhold = n1 + n2;
    //n1 becomes n2, since n2 will subsequently be the “total” number.
    n1 = n2;
    //n2 copies to the total number, so that in the next iteration it is added
    n2 = nhold;
  }

  return nhold;
}
