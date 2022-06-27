import { UpperCasePipe } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planets, Saturn } from 'app/models/planets.model';
import { PlanetsService } from 'app/services/planets.service';

interface Chat {
  type: number;
  avatar: string;
  message: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('txtmessage') messagenviar!: ElementRef<HTMLInputElement>;
  @ViewChild('scrollchat') private myScrollContainer!: ElementRef;
  scrolledToBottom = false;
  planet: Planets[] = [];
  nombrePlanet: string = "";
  densidad: number = 0;
  gravedad: number = 0;
  cantLunas: number = 0;
  typeMessage: number = 1;

  pl: Planets = {
    gravity: -1,
    density: -1,
    moons: -1
  }

  sat: Saturn = {
    gravity: -1,
    density: -1
  }

  dtChat: Chat[] = [
    {
      type: 1,
      avatar:
        'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
      message: 'Hola!!.. me llamo Marcia 🤖, ¡Empecemos calentando motores con cualquiera de estos planetas!: Tierra, Marte, Mercurio',
    },
  ];
  /*  constructor(private projectService: ProyectoService, private tokenService: TokenService) { }
   */
  constructor(private planetService: PlanetsService, private el: ElementRef, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((id) => this.ocultar(id['id']));
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      if (!this.scrolledToBottom) {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      }
    } catch (err) { }
  }

  onScroll() {
    this.scrolledToBottom = true;
  }

  messageAfterResponse() {
    this.typeMessage = 2;
    this.dtChat.push({
      type: 1,
      avatar:
        'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
      message: 'Ingrese el nombre del planeta que tiene curiosidad...',
    });
  }

  //MERCURIO
  getMercury(nombrePlanet:string) {
    this.planetService.getPlanetForName("mercury").subscribe((response) => {
      this.pl = response
      this.dtChat.push(
        {
          type: 1,
          avatar:
            'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',

          message: nombrePlanet +' tiene una densidad de: ' + this.pl.density + ' y una gravedad de: ' + this.pl.gravity + ', como particularidad tiene ' + this.pl.moons + ' lunas.',
        }
      )
      setTimeout(() => this.messageAfterResponse(), 1000);

    }, (e) => {
      alert(e)
    });
  }

  // TIERRA
  getEarth() {
    this.planetService.getPlanetForName("earth").subscribe((response) => {
      this.pl = response
      this.dtChat.push(
        {
          type: 1,
          avatar:
            'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
          message: 'La tierra tiene una densidad de: ' + this.pl.density + ' y una gravedad de: ' + this.pl.gravity,
        }
      )
      setTimeout(() => this.messageAfterResponse(), 1000);
    }, (e) => {
      alert(e)
    });
  }

  // MARTE
  getMars(nombrePlanet:string) {
    this.planetService.getPlanetForName("mars").subscribe((response) => {
      this.pl = response
      this.dtChat.push(
        {
          type: 1,
          avatar:
            'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
            message: nombrePlanet +' tiene una densidad de: ' + this.pl.density + ' y una gravedad de: ' + this.pl.gravity + ', como particularidad tiene ' + this.pl.moons + ' lunas.',
          }
      )

      setTimeout(() => this.messageAfterResponse(), 1000);
    }, (e) => {
      alert(e)
    });
  }

  // JUPITER
  getJupiter(nombrePlanet:string) {
    this.planetService.getPlanetForName("jupiter").subscribe((response) => {
      this.pl = response
      this.dtChat.push(
        {
          type: 1,
          avatar:
            'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
            message: nombrePlanet +' tiene una densidad de: ' + this.pl.density + ' y una gravedad de: ' + this.pl.gravity + ', como particularidad tiene ' + this.pl.moons + ' lunas.',
          }
      )

      setTimeout(() => this.messageAfterResponse(), 1000);
    }, (e) => {
      alert(e)
    });
  }

  // VENUS
  getVenus(nombrePlanet:string) {
    this.planetService.getPlanetForName("venus").subscribe((response) => {
      this.pl = response
      this.dtChat.push(
        {
          type: 1,
          avatar:
            'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
            message: nombrePlanet +' tiene una densidad de: ' + this.pl.density + ' y una gravedad de: ' + this.pl.gravity + ', como particularidad tiene ' + this.pl.moons + ' lunas.',
          }
      )

      setTimeout(() => this.messageAfterResponse(), 1000);
    }, (e) => {
      alert(e)
    });
  }

  // SATURNO
  getSaturn(nombrePlanet:string) {
    this.planetService.getPlanetForNameSaturn("saturn").subscribe((response) => {
      this.sat = response
      this.dtChat.push(
        {
          type: 1,
          avatar:
            'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
            message: nombrePlanet +' tiene una densidad de: ' + this.sat.density + ' y una gravedad de: ' + this.sat.gravity + ', como particularidad tiene ',
          }
      )

      setTimeout(() => this.messageAfterResponse(), 1000);
    }, (e) => {
      alert(e)
    });
  }

  // URANO
  getUranus(nombrePlanet:string) {
    this.planetService.getPlanetForName("uranus").subscribe((response) => {
      this.pl = response
      this.dtChat.push(
        {
          type: 1,
          avatar:
            'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
            message: nombrePlanet +' tiene una densidad de: ' + this.pl.density + ' y una gravedad de: ' + this.pl.gravity + ', como particularidad tiene ' + this.pl.moons + ' lunas.',
          }
      )

      setTimeout(() => this.messageAfterResponse(), 1000);
    }, (e) => {
      alert(e)
    });
  }

  // NEPTUNO
  getNeptune(nombrePlanet:string) {
    this.planetService.getPlanetForName("neptune").subscribe((response) => {
      this.pl = response
      this.dtChat.push(
        {
          type: 1,
          avatar:
            'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
            message: nombrePlanet +' tiene una densidad de: ' + this.pl.density + ' y una gravedad de: ' + this.pl.gravity + ', como particularidad tiene ' + this.pl.moons + ' lunas.',
          }
      )

      setTimeout(() => this.messageAfterResponse(), 1000);
    }, (e) => {
      alert(e)
    });
  }


  //habiliatar o desabilitar el chat
  ocultar(id: number) {
    let div = this.el.nativeElement.querySelector('#div');
    let divchat = this.el.nativeElement.querySelector('#boxchat');
    if (id == 1) {
      div.classList.remove('none');
    } else if (id == 3) {
      divchat.classList.add('none');
    } else if (id == 4) {
      divchat.classList.remove('none');
    } else {
      div.classList.add('none');
    }
  }
  //metodo para enviar los mensages
  emitermessage() {
    
    //aqui el servicio del chat
    let valorinput = this.messagenviar.nativeElement.value;
    //valida caja vacia
    if (valorinput.trim().length === 0) {
      return;
    }
    //backend
    this.dtChat.push({
      type: 2,
      avatar:
        'https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7.png',
      message: valorinput,
    });

    //quitar esta respuesta automatica
    setTimeout(() => {
      // SI EL USUARIO HA ESCRITO EN LA CADENA DE TEXTO: MERCURIO
      if(this.typeMessage == 1){
        if (valorinput.toUpperCase().includes("MERCURIO")) {
          this.getMercury("MERCURIO");
        } else
          // SI EL USUARIO HA ESCRITO EN LA CADENA DE TEXTO: TIERRA
          if (valorinput.toUpperCase().includes("TIERRA")) {
            this.getEarth();
          } else
            // SI EL USUARIO HA ESCRITO EN LA CADENA DE TEXTO: MARTE
            if (valorinput.toUpperCase().includes("MARTE")) {
              this.getMars("MARTE");
            } else {
              this.dtChat.push(
                {
                  type: 1,
                  avatar:
                    'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
                  message: 'Ingrese el nombre de alguno de los planetas mencionados.',
                }
              )
            }
      }else{
        if(valorinput.toUpperCase().includes("MERCURIO")){
          this.getMercury("Mercurio");
        }else if(valorinput.toUpperCase().includes("TIERRA")){
          this.getEarth();
        }else if(valorinput.toUpperCase().includes("MARTE")){
          this.getMars("Marte");
        }else if(valorinput.toUpperCase().includes("JUPITER")){
          this.getJupiter("Jupiter");
        }else if(valorinput.toUpperCase().includes("VENUS")){
          this.getVenus("Venus");
        }else if(valorinput.toUpperCase().includes("SATURNO")){
          this.getSaturn("Saturno");
        }else if(valorinput.toUpperCase().includes("URANO")){
          this.getUranus("Urano");
        }else if(valorinput.toUpperCase().includes("NEPTUNO")){
          this.getNeptune("Neptuno");
        }else{
          this.dtChat.push(
            {
              type: 1,
              avatar:
                'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
              message: 'Ingrese el nombre de alguno de los planetas mencionados.',
            }
          )
        }

      }
    }, 1000);
    //fin
    this.messagenviar.nativeElement.value = '';
  }
}
