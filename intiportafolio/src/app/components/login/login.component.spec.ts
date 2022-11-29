import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorizationService } from 'src/app/servicio/services/authorization.service';
import { LoginComponent } from './login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component',
  styleUrls: ['./login.component']
})

export class LoginComponent implements OnInit {
  public loginTxtEmail: string;
  public loginTxtPwd: string;

  constructor(private auth: AuthorizationService) {
    //inicializar atributos
    this.loginTxtEmail = "";
    this.loginTxtPwd = "";
  }

  ngOnInit(): void {
    
  }

  public btnLogin(): void{
    //consultar API
    this.auth.loginSimple(this.loginTxtEmail, this.loginTxtPwd);
  }
}
