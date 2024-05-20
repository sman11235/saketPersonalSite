import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, NavSidebarComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'saket.me';
  ngOnInit(): void {
  }
}
