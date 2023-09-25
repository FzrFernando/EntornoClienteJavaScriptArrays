let original = ['Entrenamiento', 'Libro', 'Trabajo', 'Estudios'];

let copia = original.slice();

copia.splice(1,0,'Juegos');

console.log(original);
console.log(copia);