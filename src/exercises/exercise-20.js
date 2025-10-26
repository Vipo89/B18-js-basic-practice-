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
  
  return exercise20Iterative(n - 1) + exercise20Iterative(n - 2);
}

export function exercise20Iterative(n) {

  if (n === 0) return 0;

  if (n === 1) return 1;

  let n1 = 0;
  let n2 = 1;
  let nhold = 0;

  for (let i = 2; i <= n; i++) {

    nhold = n1 + n2;
 
    n1 = n2;

    n2 = nhold;
  }

  return nhold;
}
