import { Component, ElementRef, OnInit } from '@angular/core';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Container,
  Engine,
  ISourceOptions,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { Cards, Planetas } from 'app/service/Json-planet';
import { JSON_EFECTO } from 'app/service/Json-efectplanet';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css'],
})
export class SkeletonComponent implements OnInit {
  dtplanet: Cards[] = Planetas;
  efecto: string = '';
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    /* setInterval(() => {
      this.flatleft(this.generateP());
     console.log(this.generateP());
    }, 2000); */
  }

  id = 'tsparticles';

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = 'http://foo.bar/particles.json';

  /* or the classic JavaScript object */
  particlesOptions: ISourceOptions = JSON_EFECTO;

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }

  flatclose: boolean = true;

  flatleft(flat: any) {
    let c1 = this.el.nativeElement.querySelector('#card1');
    let c2 = this.el.nativeElement.querySelector('#card2');
    let c3 = this.el.nativeElement.querySelector('#card3');
    let c4 = this.el.nativeElement.querySelector('#card4');
    let c5 = this.el.nativeElement.querySelector('#card5');
    let c6 = this.el.nativeElement.querySelector('#card6');
    let c7 = this.el.nativeElement.querySelector('#card7');

    if (flat == 1) {
      c1.classList.add('efecto');
      c2.classList.remove('efecto');
      c3.classList.remove('efecto');
      c4.classList.remove('efecto');
    } else if (flat == 2) {
      c1.classList.remove('efecto');
      c2.classList.add('efecto');
      c3.classList.remove('efecto');
      c4.classList.remove('efecto');
    } else if (flat == 3) {
      c1.classList.remove('efecto');
      c2.classList.remove('efecto');
      c3.classList.add('efecto');
      c4.classList.remove('efecto');
    } else if (flat == 4) {
      c1.classList.remove('efecto');
      c2.classList.remove('efecto');
      c3.classList.remove('efecto');
      c4.classList.add('efecto');
    }else if (flat == 5){
      c1.classList.remove('efecto');
      c2.classList.remove('efecto');
      c3.classList.remove('efecto');
      c4.classList.remove('efecto');
      c5.classList.add('right');
    }else if (flat == 6){
      c1.classList.remove('efecto');
      c2.classList.remove('efecto');
      c3.classList.remove('efecto');
      c4.classList.remove('efecto');
      c5.classList.remove('right');
      c6.classList.add('right');
    }else if (flat == 7){
      c1.classList.remove('efecto');
      c2.classList.remove('efecto');
      c3.classList.remove('efecto');
      c4.classList.remove('efecto');
      c5.classList.remove('right');
      c6.classList.remove('right');
      c7.classList.remove('right');
    }
  }

  generateP() {
    var pass = '';
    var str = '1234567';

    for (let i = 0; i < 1; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    return pass;
  }
}
