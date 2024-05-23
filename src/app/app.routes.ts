import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { provideRouter } from '@angular/router';
import { HomePageMobileComponent } from './home-page-mobile/home-page-mobile.component';



export const routes: Routes = [{
    path: "home",
    component: HomePageComponent
},
{
    path: "blog",
    component: BlogPageComponent
},
{
    path: "mobile",
    component: HomePageMobileComponent
},
{
    path: "",
    redirectTo: "/home",
    pathMatch: 'full'
},
{
    path: "**",
    redirectTo: "/home",
    pathMatch: "full"
}];
