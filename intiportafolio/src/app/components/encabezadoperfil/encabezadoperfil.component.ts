import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { PortafolioService } from 'src/app/servicio/portafolio.service';
import { AuthorizationService } from 'src/app/servicio/services/authorization.service';

@Component({
  selector: 'app-encabezadoperfil',
  templateUrl: './encabezadoperfil.component.html',
  styleUrls: ['./encabezadoperfil.component.css']
})
export class EncabezadoperfilComponent implements OnInit {
   isLogged = false;

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }//si tengo el token estoy conectado, de lo cotnrario no 
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

}
