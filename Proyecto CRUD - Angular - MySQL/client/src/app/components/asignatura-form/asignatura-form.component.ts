import { Asignatura } from './../../models/Asignatura';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AsignaturasService } from '../../services/asignaturas.service';

@Component({
  selector: 'app-asignatura-form',
  templateUrl: './asignatura-form.component.html',
  styleUrls: ['./asignatura-form.component.css']
})
export class AsignaturaFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  asignatura: Asignatura = {
    codigo: 0,
    nombre: '',
    creditos: null,
    horas: null,
    horaRegistro: ''
  };

  edit: boolean = false;

  constructor(private asignaturasService: AsignaturasService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.codigo) {
      this.asignaturasService.getAsignatura(params.codigo).subscribe(
        res => {
          console.log(res);
          this.asignatura = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  saveNewAsignatura() {
    delete this.asignatura.codigo;
    this.asignaturasService.saveAsignatura(this.asignatura).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/asignaturas']);
      },
      err => console.log(err)
    );
  }

  updateAsignatura() {
    this.asignaturasService.updateAsignatura(this.asignatura.codigo, this.asignatura).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/asignaturas']);
      },
      err => console.log(err)
    );
  }

}
