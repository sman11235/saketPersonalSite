import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { Breakpoints, BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, NavSidebarComponent, HomePageComponent, BlogPageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'saket.me';
  hideSideBar : boolean = false;
  
  constructor(private breakpointService : BreakpointObserver, private router : Router) {}

  ngOnInit(): void {
    this.breakpointService.observe(
      [ Breakpoints.Small, 
        Breakpoints.XSmall,
        Breakpoints.Large,
      ]
    )
    .subscribe( (res) => {

      this.hideSideBar = false;

      if (res.breakpoints[Breakpoints.Small] || res.breakpoints[Breakpoints.XSmall]) {
        this.hideSideBar = true;
      }
      if (this.router.url === "/home" || this.router.url === "/mobile") {

        if (res.breakpoints[Breakpoints.XSmall]) {

          this.router.navigate(["./mobile"]);

        } else if (res.breakpoints[Breakpoints.Large] || res.breakpoints[Breakpoints.Small]) {

          this.router.navigate(["./home"]);
        }
      }
    });
  }
}
