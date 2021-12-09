import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AsignaturaFormComponent } from './components/asignatura-form/asignatura-form.component';
import { AsignaturaListComponent } from './components/asignatura-list/asignatura-list.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';

import { AsignaturasService } from './services/asignaturas.service';
import { AlumnosService } from './services/alumnos.service';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AsignaturaFormComponent,
    AsignaturaListComponent,
    AlumnoFormComponent,
    AlumnoListComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AsignaturasService,
    AlumnosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
