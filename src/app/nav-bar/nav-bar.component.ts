import { Component} from '@angular/core';
import { NavBarCompComponent } from '../nav-bar-comp/nav-bar-comp.component';
import { fromEvent, Observable, Subscription } from "rxjs";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NavBarCompComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  innerWidth : number;
  numOfComps : number;
  resizeObserver$! : Observable<Event>;
  narBarCompWidth = 220;
  resizeSubscription$! : Subscription;
  constructor() {
    this.innerWidth = window.screen.width;
    this.numOfComps = Math.floor((this.innerWidth * 1.5) / this.narBarCompWidth);
  }
}
