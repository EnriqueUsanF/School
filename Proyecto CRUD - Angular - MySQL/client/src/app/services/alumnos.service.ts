import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Alumno } from '../models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAlumnos() {
    return this.http.get(`${this.API_URI}/alumno`);
  }

  getAlumno(cuenta: string) {
    return this.http.get(`${this.API_URI}/alumno/${cuenta}`);
  }

  deleteAlumno(cuenta: string) {
    return this.http.delete(`${this.API_URI}/alumno/${cuenta}`);
  }

  saveAlumno(alumno: Alumno) {
    return this.http.post(`${this.API_URI}/alumno`, alumno);
  }

  updateAlumno(cuenta: string | number, alumnoActualizadao: Alumno) {
    return this.http.put(`${this.API_URI}/alumno/${cuenta}`, alumnoActualizadao);
  }

}
