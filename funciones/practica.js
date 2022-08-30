//Ejemplo callback

const saludar = (nombre) =>
{
    console.log(`Hola ${nombre}`)
}

const procesarEntradaUsuario = (callback) =>
{
    let nombre = prompt('Ingresa tu nombre');
    callback(nombre)
}

procesarEntradaUsuario(saludar);