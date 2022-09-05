// const persona =
// {
//     nombre: "Juan",
//     apellido: "Paz",
//     profesion: 'estudiante',
// }


// console.log(persona.nombre);


// class Pizza
// {
//     constructor(tamaño, sabor, precio, tipoMasa)
//     {
//         this.tamaño = tamaño;
//         this.sabor = sabor;
//         this.precio = precio;
//         this.tipoMasa = tipoMasa;
//     }
// }

// const pizzaMuzzarela = new Pizza('grande', 'queso', '600', 'integral')
// console.log(pizzaMuzzarela)


class Robot
{
    constructor(color, posX, posY)
    {
        this.color = color;
        this.posX = posX;
        this.posY = posY;
    }

    desplazar = function(x, y)
    {
        this.posX = x;
        this.posY = y;
    }

    getPosition = function()
    {
        console.log(`Estoy en la posicion ${this.posX} en X y ${this.posY} en Y`)
    }
}

const robotito = new Robot('Blanco', '3', '5');

console.log(robotito);
robotito.desplazar(3, 10);
console.log(robotito.getPosition());


