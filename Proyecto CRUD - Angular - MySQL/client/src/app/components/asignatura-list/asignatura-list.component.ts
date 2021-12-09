import { Component, HostBinding, OnInit } from '@angular/core';

import { AsignaturasService } from '../../services/asignaturas.service';

@Component({
  selector: 'app-asignatura-list',
  templateUrl: './asignatura-list.component.html',
  styleUrls: ['./asignatura-list.component.css']
})
export class AsignaturaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  asignaturas: any = [];

  constructor(private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    this.getAsignaturas();
  }

  getAsignaturas() {
    this.asignaturasService.getAsignaturas().subscribe(
      res => {
        this.asignaturas = res;
      },
      err => console.log(err)
    );
  }

  deleteAsignatura(codigo: string) {
    this.asignaturasService.deleteAsignatura(codigo).subscribe(
      res => {
        console.log(res);
        this.getAsignaturas();
      },
      err => console.log(err)
    );
  }

}
