import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaEstudiosComponent } from './components/experiencia-estudios/experiencia-estudios.component'; 
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContactameComponent } from './components/contactame/contactame.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'experiencia-estudios', component: ExperienciaEstudiosComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'contactame', component: ContactameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
