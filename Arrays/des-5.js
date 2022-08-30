//Crear un bucle que imprima todos los números, excepto el que este en la 4ta posición

let listaNumeros = [1,2,3,4,5,6,7,8,9,10];
let i;

for (i = 0; i < listaNumeros.length; i++)
{
    if(i==3)
    {
        continue;
    }

    console.log(listaNumeros[i]);
}