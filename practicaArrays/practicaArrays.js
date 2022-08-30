let listaNombres = [];
let i;
let nombre;

for (i = 0; i < 5; i++) {
  nombre = prompt("ingrese 5 nombres", "");
  //listaNombres.push(nombre);
  listaNombres[i] = nombre;
}

if (listaNombres.includes('Juan')) {
  alert("Hay alguien que se llama Juan");
}

console.log(nombre);
console.log(listaNombres);
console.log(listaNombres[0]);
