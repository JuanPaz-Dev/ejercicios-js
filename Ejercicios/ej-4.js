// Momento de agregar arrays a la práctica.
// Escribí un código en el cual crees un array con los números del 1 al 10. (Este array lo vamos a seguir usando en los próximos ejercicios) y luego mediante el uso de un bucle, imprimí cada número en consola.

let listaNumeros = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < listaNumeros.length; i++) 
{   
    listaNumeros[i] = listaNumeros[i]*2;
    console.log(listaNumeros[i]);
}
