import { Location } from '@angular/common';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

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

  link(){
    var enlace = [
      "www.google.com", 
      "www.sucaricatura.com", 
      "www.tunait.com",
      "www.webareyou.com"];
     let n = Math.floor(Math.random() * enlace.length);
     window.open(enlace[n], '_blank');
    
  }

}
