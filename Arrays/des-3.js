//Crear un bucle que imprima solo los primeros 5 números

let listaNumeros = [1,2,3,4,5,6,7,8,9,10];
let i;

for (i = 0; i < listaNumeros.length; i++){
    
    if(i==5)
    {
        break;
    }

    console.log(listaNumeros[i]);
}


