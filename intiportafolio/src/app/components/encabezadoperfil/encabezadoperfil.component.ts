import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicio/portafolio.service';
import { AuthorizationService } from 'src/app/servicio/services/authorization.service';

@Component({
  selector: 'app-encabezadoperfil',
  templateUrl: './encabezadoperfil.component.html',
  styleUrls: ['./encabezadoperfil.component.css']
})
export class EncabezadoperfilComponent implements OnInit {
  datosportafolio: any;

  //inyectamos la dependencia del servicio
    
  constructor(private auth:AuthorizationService) {}

  ngOnInit(): void {
      }

  public get isLogin(): boolean {
    return this.auth.isUserLogIn();
  }

  public btnLogout(): void {
    this.auth.logout();
  }

}
