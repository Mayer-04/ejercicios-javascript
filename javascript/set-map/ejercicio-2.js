/* 
Crea un mapa que almacene nombres de ciudades como claves y sus respectivas temperaturas actuales como valores. 
Luego, escribe una función que reciba el mapa y devuelva la ciudad con la temperatura más alta. 
*/

const ciudades = new Map();

ciudades.set("Bogota", 21);
ciudades.set("Cuidad de Mexico", 21);
ciudades.set("Londres", 8);
ciudades.set("Madrid", 14);
ciudades.set("Singapur", 26);
ciudades.set("Buenos Aires", 23);

function encontrarCiudadMasCaliente(ciudades) {
  let ciudadConTemperaturaMasAlta = "";

  const temperaturas = [...ciudades.values()];
  const temperaturaMasAlta = Math.max(...temperaturas);

  ciudades.forEach((temperatura, ciudad) => {
    if (temperatura === temperaturaMasAlta) {
      ciudadConTemperaturaMasAlta = ciudad;
    }
  });

  return ciudadConTemperaturaMasAlta;
}

console.log(encontrarCiudadMasCaliente(ciudades));

// Segunda forma de resolver el ejercicio ✅
function ciudadMasCaliente(map) {
  const temperaturas = [...map.values()];
  const temperaturaMasAlta = Math.max(...temperaturas);

  const cuidadYTemperatura = [...map.entries()];
  const encontrarTemperatura = cuidadYTemperatura.find(
    ([_, temperatura]) => temperatura === temperaturaMasAlta
  );

  return encontrarTemperatura.at();
}

ciudadMasCaliente(ciudades);
