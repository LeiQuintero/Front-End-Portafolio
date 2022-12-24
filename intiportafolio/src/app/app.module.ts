import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoperfilComponent } from './components/encabezadoperfil/encabezadoperfil.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaEstudiosComponent } from './components/experiencia-estudios/experiencia-estudios.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule} from  '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContactameComponent } from './components/contactame/contactame.component'
import { HttpClientModule } from '@angular/common/http';


//Importar el módulo de boostrap ng
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { interceptorProvider } from './service/interceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoperfilComponent,
    AcercaDeComponent,
    ExperienciaEstudiosComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    HabilidadesComponent,
    ContactameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
