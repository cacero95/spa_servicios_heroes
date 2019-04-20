import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  //con la propiedad Input podemos pedir propiedades que se vallan a heredar
  @Input() heroe:any = {}
  @Input() index:number;
  @Output() heroeSeleccionado:EventEmitter<number>;
  constructor() {
    this.heroeSeleccionado =  new EventEmitter();
    
  }

  ngOnInit() {
  }
  verHeroe(){
    //this.router.navigate(['/heroe',this.index]);
    //esto funciona para emitir cualquier parametro, como cualquier servicio
    // lo que produce que cualquier componente que sue heroeSeleccionado pueda recivir
    // en este caso this.index
    this.heroeSeleccionado.emit( this.index );
  }
}
