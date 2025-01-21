import { Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component'
import { HomeScreenComponent } from './components/home-screen/home-screen.component';

export const routes: Routes = [
  { path: '', component: SplashScreenComponent },  
  { path: 'home', component: HomeScreenComponent } 
];
