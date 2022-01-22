import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  
})
export class PorPaisComponent {

  termino:string = "";
  hayError:boolean = true;
  
  constructor( private paisService:PaisService ) { }

  buscar() {
    this.hayError = true;
    console.log(this.termino);

    this.paisService.buscarPais( this.termino ).subscribe( (resp) => {
      console.log(resp);
    }, (err) => {
      this.hayError = false;
    });
  }
}
//private apiUrl: string = 'https://restcountries.com/v2';