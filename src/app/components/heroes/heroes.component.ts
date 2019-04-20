import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];
  constructor( private _heroesService:HeroesService, private router:Router) {

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }
  verHeroe(index:number){
    //esta es una prueba para ver como se redireccionar pagina desde un boton
    this.router.navigate( ['/heroe',index] );
  }

}
