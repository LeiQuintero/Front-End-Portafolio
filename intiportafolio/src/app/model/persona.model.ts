//se crea la clase que permite interactuar con las clases externas

export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
  

    constructor(nombre: string, apellido: string, descripcion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = this.descripcion;
      
    }
}