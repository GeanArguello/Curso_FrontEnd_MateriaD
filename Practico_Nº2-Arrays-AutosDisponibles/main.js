const autosDisponibles = [
  { marca: "Chevrolet", modelo: "Camaro", puertas: 2 },
  { marca: "Chevrolet", modelo: "Cruze", puertas: 4 },
  { marca: "Ford", modelo: "Fiesta", puertas: 4 },
  { marca: "Ford", modelo: "Focus", puertas: 4 },
  { marca: "Ford", modelo: "Mustang", puertas: 4 },
  { marca: "Ford", modelo: "Fusion", puertas: 4 },
  { marca: "Ford", modelo: "Ka", puertas: 2 },
  { marca: "Audi", modelo: "A4", puertas: 5 },
  { marca: "Audi", modelo: "A5", puertas: 5 },
  { marca: "Audi", modelo: "A6", puertas: 5 },
  { marca: "Audi", modelo: "A7", puertas: 5 },
  { marca: "Audi", modelo: "A8", puertas: 5 },
  { marca: "Audi", modelo: "Q5", puertas: 5 },
  { marca: "BMW", modelo: "Serie 3", puertas: 5 },
  { marca: "BMW", modelo: "Serie 5", puertas: 5 },
  { marca: "BMW", modelo: "Serie 7", puertas: 5 },
  { marca: "Mercedes Benz", modelo: "Clase A", puertas: 5 },
  { marca: "Mercedes Benz", modelo: "Clase C", puertas: 5 },
  { marca: "Mercedes Benz", modelo: "Clase E", puertas: 5 },
];

/******************************************************************************************** */
// Ejercicio Nº1
console.log(
  "***********************Autos Disponibles********************************"
);

function vehiculosDisponibles(autos) {
  autos.forEach((element) => {
    console.log(`Tenemos disponible un ${element.modelo}`);
  });
}
vehiculosDisponibles(autosDisponibles);

/******************************************************************************************** */
// Ejercicio Nº2
console.log(
  "**********************Autos 4 Puertas**********************************"
);

function autosGenaro(listAutos, puertas) {
  const autosParaGenaro = listAutos.filter((autos) => autos.puertas <= puertas);
  return autosParaGenaro;
}
let autosPuertaGenaro = autosGenaro(autosDisponibles, 4);
vehiculosDisponibles(autosPuertaGenaro);

/******************************************************************************************** */
//Ejecrcicio 3:
console.log(
  "******************Autos Ford Con 4 Puertas*****************************"
);

function autosGenaro2(listAuto, marca, puertas) {
  let autosParaGenaro = listAuto.filter(
    (cars) => cars.marca === marca && cars.puertas === puertas
  );
  return autosParaGenaro;
}
const autosMarcaPuertaGenaro = autosGenaro2(autosPuertaGenaro, "Ford", 4);

autosMarcaPuertaGenaro.forEach((element) => {
  console.log(
    `Tenemos disponibles los autos ${element.marca} ${element.modelo} que tienen ${element.puertas} puertas`
  );
});
/********************************************************************************************* */
// Ejercicio Nº4:
console.log(
  "************************Comprando Auto********************************"
);

function comprarAuto(param) {
  const comprandoAuto = param.find((auto) => auto.modelo === "Mustang");
  return comprandoAuto;
}
//
const autoComprado = comprarAuto(autosMarcaPuertaGenaro);
console.log(
  `Felicitaciones Genaro por haber adquirido tu nuevo y flamante ${autoComprado.marca} ${autoComprado.modelo} que disfrutes tus ${autoComprado.puertas} puertas`
);
/********************************************************************************************* */
//Ejercicio Nº5
console.log(
  "**************Nueva Lista Sin El Auto Vendido*************************"
);

function listActualizado(list_origin, auto_vendido) {
  const newList = list_origin.filter(
    (descartado) => descartado.modelo !== auto_vendido.modelo
  );
  return newList;
}
autosDisponiblesActualizado = listActualizado(autosDisponibles, autoComprado);
vehiculosDisponibles(autosDisponiblesActualizado);
