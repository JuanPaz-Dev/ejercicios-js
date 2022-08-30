const intervaloEntreConFlecha = (num1, num2) => {
    let numeroActual = num1;
  
    if (numeroActual > num2) {
      console.log(numeroActual);
      while (numeroActual > num2) {
        numeroActual--;
        console.log(numeroActual);
      }
    } else if (numeroActual < num2) {
      console.log(numeroActual);
      while (numeroActual < num2) {
        numeroActual++;
        console.log(numeroActual);
      }
    } else {
      console.log("Ambos números son iguales");
    }
  };

  intervaloEntreConFlecha(20,25);