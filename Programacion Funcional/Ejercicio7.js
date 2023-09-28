const nombres = ["Ana", "Juan", "Luis", "Ana", "Luis", "María"];

const nombresNoDuplicados = new Set(nombres);

const nombresNoDuplicadosArray = Array.from(nombresNoDuplicados);

console.log(nombresNoDuplicadosArray);