import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  
})
export class PorPaisComponent {

  termino:string = "";
  hayError:boolean = true;
  paises:Country[] = [];
  
  constructor( private paisService:PaisService ) { }

  buscar(termino:string) {
    this.hayError = true;
    this.termino = termino;

    this.paisService.buscarPais( this.termino ).subscribe( (paises) => {
      console.log(paises);
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
//private apiUrl: string = 'https://restcountries.com/v2';