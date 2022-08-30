// Trabajemos con el bucle while.
// Creá una variable contador que, mientras que el valor de contador sea menor a 20 , se aumente en uno con cada iteración. Imprimí en consola el valor actual en cada una de las iteraciones.
// Finalmente, Imprimí por consola el valor final de la variable contador

let contador;
contador = 0;
let mensaje;

while (contador<20)
{
    contador = contador + 1;
    console.log(contador);
}

mensaje = `El valor final del contador es ${contador}`;

console.log(mensaje);