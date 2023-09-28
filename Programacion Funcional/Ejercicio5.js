const persona = {
    nombre: "Juan",
    edad: 30,
    direccion: {
      calle: "Calle Principal",
      ciudad: "Ciudad"
    }
};

const copiaPersona = JSON.parse(JSON.stringify(persona));

copiaPersona.edad = 31;

console.log("Edad original: ", persona.edad);

copiaPersona.direccion.calle = "Otra Calle";

console.log("Calle original", persona.direccion.calle);