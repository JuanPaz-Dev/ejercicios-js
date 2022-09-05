class zapatilla {
    constructor(marca, talle, color, precio){
        this.marca = marca;
        this.talle = talle;
        this.color = color;
        this.precio = precio;

    }

    getInfo = function(){
        console.log(`Soy una zapatilla: ${this.marca} de color ${this.color} y de talle ${this.talle}`);
    }
}


const primerZapatilla = new zapatilla('nike', 42, 'celeste', 1000);
const segundaZapatilla = new zapatilla('adidas', 43, 'rojas', 300);



const compararPreciosAmbas = (primerZapatilla, segundaZapatilla) =>
    {
        if(primerZapatilla.precio > segundaZapatilla.precio)
        {
            console.log(`la zapatilla de ${primerZapatilla.marca} es la mas cara del mercado`);
        }
    }

compararPreciosAmbas(primerZapatilla, segundaZapatilla)

// console.log(primerZapatilla.getInfo());

