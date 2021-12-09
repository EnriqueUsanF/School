import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsignaturaListComponent } from './components/asignatura-list/asignatura-list.component';
import { AsignaturaFormComponent } from './components/asignatura-form/asignatura-form.component';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/fondo',
    pathMatch: 'full'
  },
  {
    path: 'fondo',
    component: InicioComponent
  },
  {
    path: 'asignaturas',
    component: AsignaturaListComponent
  },
  {
    path: 'asignatura/add',
    component: AsignaturaFormComponent
  },{
    path: 'asignatura/edit/:codigo',
    component: AsignaturaFormComponent
  },
  {
    path: 'alumnos',
    component: AlumnoListComponent
  },
  {
    path: 'alumno/add',
    component: AlumnoFormComponent
  },{
    path: 'alumno/edit/:cuenta',
    component: AlumnoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
