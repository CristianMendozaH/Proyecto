// Función flecha que crea un objeto estudiante
const crearEstudiante = (nombre_alumno, edad_alumno, nota1, nota2, nota3) => {
    return {
        nombre_alumno,
        edad_alumno,
        nota1,
        nota2,
        nota3,
        promedio: function() {
            return (this.nota1 + this.nota2 + this.nota3) / 3;
        },
        mostrarDatos: function() {
            setTimeout(() => {
                console.log(`Nombre: ${this.nombre_alumno}`);
                console.log(`Edad: ${this.edad_alumno}`);
                console.log(`Nota 1: ${this.nota1}`);
                console.log(`Nota 2: ${this.nota2}`);
                console.log(`Nota 3: ${this.nota3}`);
                console.log(`Promedio: ${this.promedio().toFixed(2)}`);
                console.log('--------------------------');
            }, 5000); // Retraso de 5 segundos
        }
    };
};

// Crear cinco estudiantes usando la función factory
const estudiante1 = crearEstudiante('Juan Pérez', 18, 85, 90, 88);
const estudiante2 = crearEstudiante('Ana Gómez', 19, 78, 84, 80);
const estudiante3 = crearEstudiante('Luis Rodríguez', 20, 92, 95, 93);
const estudiante4 = crearEstudiante('María López', 18, 70, 75, 72);
const estudiante5 = crearEstudiante('Carlos Hernández', 21, 88, 82, 90);

// Mostrar los datos de los estudiantes con un retraso de 5 segundos
estudiante1.mostrarDatos();
estudiante2.mostrarDatos();
estudiante3.mostrarDatos();
estudiante4.mostrarDatos();
estudiante5.mostrarDatos();
