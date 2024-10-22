/* 
Crear un programa que calcule el área de un triángulo rectángulo. 
El usuario debe ingresar la longitud de los dos catetos y el programa debe mostrar el resultado del área.
*/

//TODO: Validaciones pendientes
export const trianguloRectangulo = function (b, a) {
  const areaTriangulo = (b * a) / 2;
  // const mensaje = `El área del triángulo rectángulo es: ${areaTriangulo}`;
  return areaTriangulo;
};

console.log(trianguloRectangulo(5, 6)); // La área del triángulo rectángulo es: 15
