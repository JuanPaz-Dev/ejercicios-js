const primerZapatilla = {
  talle: 44,
  color: "rojo",
  marca: "adidas",
};

const segundaZapatilla = {
  talle: 42,
  color: "celeste",
  marca: "nike",
};

const compararZapatillas = (primerZapatilla, segundaZapatilla) => {
  
    if (primerZapatilla.talle > segundaZapatilla.talle) {
        console.log(`el talle de la zapatilla ${primerZapatilla.marca} es mayor que el de la zapatilla ${segundaZapatilla.marca}`);

  } else if (primerZapatilla.talle < segundaZapatilla.talle) {
        console.log(`el talle de la zapatilla ${primerZapatilla.marca} es menor que el de la zapatilla ${segundaZapatilla.marca}`);

  } else {
        console.log(`Los talles de ambas zapatillas ${primerZapatilla.marca} y ${segundaZapatilla.marca} son iguales`);
    }
};

compararZapatillas(primerZapatilla, segundaZapatilla);
