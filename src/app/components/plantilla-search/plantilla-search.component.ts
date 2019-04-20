import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-plantilla-search',
  templateUrl: './plantilla-search.component.html',
  styleUrls: ['./plantilla-search.component.css']
})
export class PlantillaSearchComponent implements OnInit {
  @Input() heroe:any={};
  @Input() index:number;
  constructor(private router:Router) {
    console.log(this.index);
  }

  ngOnInit() {
  }
  verHeroe(){
    this.router.navigate(['/heroe',this.index]);
  }
}
