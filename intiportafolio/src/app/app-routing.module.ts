import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContactameComponent } from './components/contactame/contactame.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewHabilidadesComponent } from './components/habilidades/new-habilidades.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'editacercade/:id', component: EditAcercaDeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  //para poder darle la ruta para editar la exp debo asignarle el id a buscar/editar
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'newhabilidades', component: NewHabilidadesComponent },
  { path: 'edithabilidades/:id', component: EditHabilidadesComponent},
  { path: 'contactame', component: ContactameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
