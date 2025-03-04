import {Component, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {Select} from 'primeng/select';
import {FormsModule} from '@angular/forms';

interface Animation {
  name: string;
  classes: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Card, Button, Dialog, Select, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
  visible: boolean | WritableSignal<boolean>;
  dynamicAnimationClasses: any;
  animations: Animation[] | undefined;
  animation: Animation | undefined;

  constructor() {
    this.visible = false;
    this.animations = [
      {
        name: 'bounce',
        classes: 'animate-bounce'
      },
      {
        name: 'fadein',
        classes: 'animate-fadein'
      },
      {
        name: 'fadeout',
        classes: 'animate-fadeout'
      },
      {
        name: 'slidedown',
        classes: 'animate-slidedown'
      },
      {
        name: 'slideup',
        classes: 'animate-slideup'
      },
      {
        name: 'none',
        classes: ''
      }
    ];
    this.dynamicAnimationClasses = this.animations[0].classes;
  }

  closeDialog() {
    this.visible = false;
  }

  openDialog() {
    this.visible = true;
  }

  changeAnimation() {
    this.dynamicAnimationClasses = this.animation?.classes;
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
  }
}
