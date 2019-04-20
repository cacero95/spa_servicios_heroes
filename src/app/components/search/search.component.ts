import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  resultados:any[] = [];
  termino:string;
  constructor(private router:ActivatedRoute, private servicioHeroe:HeroesService, private ruta:Router) {


  }

  ngOnInit() {
    this.router.params.subscribe( nodo =>{
      this.termino=(nodo['nombre']);
      this.resultados=this.servicioHeroe.buscarHeroes(nodo['nombre']);
      console.log(this.resultados);
    });
  }
  verHeroe(index:string){
    this.ruta.navigate(['/heroe',index]);
  }
}
