import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  //URL de nuestra API
  private strUrlApi: string;
  router: any;
  localStorage: any;

  constructor(private http: HttpClient) {
    //ruta de nuestro archivo json
    this.strUrlApi = '../../assets/data/user.json';//intiportafolio/src
  }
  
  public loginSimple(email: string, pwd: string): void {
    //llamada a la Api
    this.http.get(this.strUrlApi).subscribe(
      (response: any) => {
        if (response.token != null) {
          //guardamos el token
          localStorage.setItem('token', response.token);
          //this.localStorage.saveData('token', response.token);
          this.router.navigate(['/experiencia-estudios'])
        }
      }
    );
  }

  public logout(): void {
    //al cerrar sesión se elimina el token
    localStorage.removeItem('token');
    //redireccionar
    this.router.navigate(['/']);
  }

  public isUserLogIn(): boolean{
    return (localStorage.getItem('token') != null);
  }

    

  }



