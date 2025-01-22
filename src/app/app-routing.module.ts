import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component'
import { HomeScreenComponent } from './components/home-screen/home-screen.component';

export const routes: Routes = [
  { path: '', component: SplashScreenComponent },  
  { path: 'home', component:HomeScreenComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }