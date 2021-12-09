import { Alumno } from './../../models/Alumno';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  alumno: Alumno = {
    cuenta: 0,
    nombre: '',
    paterno: '',
    fechaNacimiento: '',
    sexo: '',
    edad: null,
    celular: null,
    codigo: null
  };

  edit: boolean = false;

  constructor(private alumnosService: AlumnosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.cuenta) {
      this.alumnosService.getAlumno(params.cuenta).subscribe(
        res => {
          console.log(res);
          this.alumno = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  saveNewAlumno() {
    delete this.alumno.cuenta;
    this.alumnosService.saveAlumno(this.alumno).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/alumnos']);
      },
      err => console.log(err)
    );
  }

  updateAlumno() {
    this.alumnosService.updateAlumno(this.alumno.cuenta, this.alumno).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/alumnos']);
      },
      err => console.log(err)
    );
  }

}
