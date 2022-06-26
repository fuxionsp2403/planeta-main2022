import { Component, Input, OnInit } from '@angular/core';
import { PlanetService } from 'app/service/planet.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() id!:string;
  @Input() image!:string;

  title:string="";
  gravedad:string="";
  dimension:string="";
  escape:string="";

  datos:any;

  constructor(private srvplaneta:PlanetService) {

  }

  ngOnInit(): void {
    this.srvplaneta.getnameplaneta(this.id)
    .subscribe((response) => {
      this.title = this.spanishName(this.id);
      this.datos = response;
      this.gravedad =  response.meanRadius;
      this.escape =  response.equaRadius;
      this.dimension = response.polarRadius;
    })
  }
  spanishName(name:string):string {
    switch (name) {
      case  "mercury": return "Mercurio";
      case  "venus": return "Venus";
      case  "earth": return "Tierra";
      case  "mars": return "Marte";
      case  "saturn": return "Saturno";
      case  "uranus": return "Urano";
      case  "neptune": return "Nepturno";
      case  "jupiter": return "Jupiter";
      default: return"";
    }
  }


}
