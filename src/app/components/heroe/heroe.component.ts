import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  personaje:any;
  tick:boolean = false;
  casa:string;
  constructor( private activatedRoute:ActivatedRoute, private heroe:HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
      this.personaje = heroe.getHeroe(params.id);



      if(this.personaje.casa == "DC"){
        this.tick = true;
        
      }

    })
  }

  ngOnInit() {

  }

}
