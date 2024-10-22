// Obtener la fecha y hora actual
const fechaActual = new Date();

// Formatear la fecha y hora según la configuración regional del usuario
let formatoFechaHora = new Intl.DateTimeFormat("es-CO", {
  dateStyle: "full", // Estilo de la fecha: completo
  timeStyle: "short", // Estilo de la hora: largo
  hour12: true, // Utilizar formato de 12 horas
  timeZone: "America/Bogota", // Especificar el huso horario de Colombia
});

// Formatear la fecha y hora actual
const fechaHoraFormateada = formatoFechaHora.format(fechaActual);
console.log(fechaHoraFormateada); // Output: martes, 13 de agosto de 2024, 12:06 p. m.
