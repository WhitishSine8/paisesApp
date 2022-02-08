import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino:string = "";
  hayError:boolean = true;
  paises:Country[] = [];

  constructor( private paisService:PaisService ) { }

  buscar(termino:string) {
    this.hayError = true;
    this.termino = termino;

    this.paisService.buscarCapital( this.termino ).subscribe( (paises) => {
      this.paises = paises;
      
    }, (err) => {
      this.hayError = false;
      this.paises = [];
    });
  }

  sugerencias(termino:string) {
    this.hayError = false;
  }
}
