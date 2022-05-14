import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxcontainer',
  templateUrl: './boxcontainer.component.html',
  styleUrls: ['./boxcontainer.component.css']
})
export class BoxcontainerComponent implements OnInit {

  flatcontainer = false;
  constructor() { }

  ngOnInit(): void {
  }

  show(){
    if(this.flatcontainer){
      this.flatcontainer = false;
    }else{
      this.flatcontainer = true;
    }

  }

}
