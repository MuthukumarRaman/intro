import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './components/authorization/landing-page/landing-page.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/authorization/login/login.component'
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/authorization/registration/registration.component';
export const routes: Routes = [
  { path: '', component: LandingPageComponent, title:"Intro"}, 
  { path: 'login', component:LoginComponent,title: 'Login'}, 
  { path: 'register', component:RegistrationComponent,title: 'register'},
  { 
    path: 'dashboard', 
    component: DashboardComponent, title: 'Dashboard',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'explore', component: ExploreComponent ,title: 'Explore'},
      { path: 'chat', component:  ChatComponent, title: 'Chat'},
      { path: 'profile', component: ProfileComponent, title: 'Profile' }
    ]
  }
  
 
  // {path: '**', component:LandingPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }