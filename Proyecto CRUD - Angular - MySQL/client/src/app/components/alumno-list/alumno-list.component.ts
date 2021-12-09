import { Component, HostBinding, OnInit } from '@angular/core';

import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  alumnos: any = [];

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.getAlumnos();
  }

  getAlumnos() {
    this.alumnosService.getAlumnos().subscribe(
      res => {
        this.alumnos = res;
      },
      err => console.log(err)
    );
  }

  deleteAlumno(cuenta: string) {
    this.alumnosService.deleteAlumno(cuenta).subscribe(
      res => {
        console.log(res);
        this.getAlumnos();
      },
      err => console.log(err)
    );
  }

}
