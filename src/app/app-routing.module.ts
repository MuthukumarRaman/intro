import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './components/authorization/landing-page/landing-page.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/authorization/login/login.component'
export const routes: Routes = [
  { path: '', component: LandingPageComponent },  
  { path: 'home', component:DashboardComponent},
  { path: 'login', component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }