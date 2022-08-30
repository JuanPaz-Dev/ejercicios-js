// Vamos a complicarla un poquito mas, escribí un código que por cada número del array imprima en consola la tabla (del 0 al 10) del número que corresponda en cada iteración.

// En cada iteración , el mensaje debe leerse como en el siguiente ejemplo “ 1(número) multiplicado por 2 (número de la tabla) es igual a 2(resultado) “.

let listaNumeros = [1,2,3,4,5,6,7,8,9,10];
// let multiplicador = 2;
let i;
// let resultado;


for (i = 0; i < listaNumeros.length; i++)
{
    for (let e = 0; e < 10; e++)
    {
        console.log(`${listaNumeros[e]} multiplcado por ${i} es igual a
        ${listaNumeros[e] * i}`);
    }
}