import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Asignatura } from '../models/Asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAsignaturas() {
    return this.http.get(`${this.API_URI}/asignatura`);
  }

  getAsignatura(codigo: string) {
    return this.http.get(`${this.API_URI}/asignatura/${codigo}`);
  }

  deleteAsignatura(codigo: string) {
    return this.http.delete(`${this.API_URI}/asignatura/${codigo}`);
  }

  saveAsignatura(asignatura: Asignatura) {
    return this.http.post(`${this.API_URI}/asignatura`, asignatura);
  }

  updateAsignatura(codigo: string | number, asignaturaActualizada: Asignatura) {
    return this.http.put(`${this.API_URI}/asignatura/${codigo}`, asignaturaActualizada);
  }

}
