import { Component, Input, OnInit } from '@angular/core';

interface Cards {
  nameTitle: string;
  nameImage: string;
  description: string;
}
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() valor!:number;
  listCards: Cards[] = [
    {
      nameTitle: 'mercurio.jpg',
      nameImage: 'mercurio-logo.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga sint alias excepturi maiores illum odit consequuntur, fugiat beatae architecto.',
    },
    {
      nameTitle: 'venus.jpg',
      nameImage: 'venus-logo.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga sint alias excepturi maiores illum odit consequuntur, fugiat beatae architecto.',
    },
    {
      nameTitle: 'tierra.jpg',
      nameImage: 'tierra-logo.JPG',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga sint alias excepturi maiores illum odit consequuntur, fugiat beatae architecto.',
    },
    {
      nameTitle: 'marte.jpg',
      nameImage: 'marte-logo.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga sint alias excepturi maiores illum odit consequuntur, fugiat beatae architecto.',
    },
    {
      nameTitle: 'jupiter.jpg',
      nameImage: 'jupiter-logo.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga sint alias excepturi maiores illum odit consequuntur, fugiat beatae architecto.',
    },
    {
      nameTitle: 'saturno.jpg',
      nameImage: 'saturno-logo.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga sint alias excepturi maiores illum odit consequuntur, fugiat beatae architecto.',
    },
    {
      nameTitle: 'urano.jpg',
      nameImage: 'urano-logo.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga sint alias excepturi maiores illum odit consequuntur, fugiat beatae architecto.',
    },
    {
      nameTitle: 'neptuno.jpg',
      nameImage: 'neptuno-logo.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga sint alias excepturi maiores illum odit consequuntur, fugiat beatae architecto.',
    },
    {
      nameTitle: 'jupiter.jpg',
      nameImage: 'jupiter-logo.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga sint alias excepturi maiores illum odit consequuntur, fugiat beatae architecto.',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
