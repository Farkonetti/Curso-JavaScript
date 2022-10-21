class Estudiante {
    nombre = "Paco",
    asignaturas = ['JavaScript', 'HTML', 'CSS']

    obtenDatos() {
        return{
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
        } 
}

const alumno = new Estudiante()

console.log(obtenDatos);


