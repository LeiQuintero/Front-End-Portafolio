import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  constructor() { }
  //inyectable siempre va en el constructor.Los componentes acceden al inyectable. 
  //Se crea un método para inyectar servicios. se prueba por consola
  obtenerDatos() { 
    console.log("El servicio está corriendo en Leidy");
  }
}
