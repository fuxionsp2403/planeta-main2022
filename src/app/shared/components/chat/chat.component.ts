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
  //Estado para ocultar el chat
  scrolledToBottom = false;
  //arreglo de mensages
  //type = 1 => usuario de sistema chat boot
  // type =2 => usuario invitado
  dtChat: Chat[] = [
    {
      type: 1,
      avatar:
        'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
      message: 'Ola!!.. me llamo Alexa, en que puedo ayudarte?',
    },
  ];

  constructor(private el: ElementRef, private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRouter.params.subscribe((id) => this.ocultar(id['id']));
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      if(!this.scrolledToBottom){
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
     }
    } catch (err) {}
  }

  onScroll(){
    this.scrolledToBottom = true;
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
      this.dtChat.push(
        {
          type: 1,
          avatar:
            'https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png',
          message: 'un momento estamos validando........',
        }
      )
    }, 1000);
    //fin
    this.messagenviar.nativeElement.value = '';
  }
}
