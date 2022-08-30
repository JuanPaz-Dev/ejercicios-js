const sumar = (num1, num2) =>
{
    console.log(num1 + num2);
}

const restar = (num1, num2) =>
{
    console.log(num1 - num2);
}

const multiplicar = (num1, num2) =>
{
    console.log(num1 * num2);
}

const dividir = (num1, num2) =>
{
    console.log(num1 / num2);
}

const hacerOperacion = (num1, num2, fn) =>
{
    fn(num1, num2);
}

hacerOperacion(3, 4, sumar);