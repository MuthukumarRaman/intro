import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './components/authorization/landing-page/landing-page.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/authorization/login/login.component'
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProfileComponent } from './components/profile/profile.component';
export const routes: Routes = [
  { path: '', component: LandingPageComponent }, 
  { path: 'login', component:LoginComponent}, 
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    children: [
      { path: '', component: HomeComponent },
      { path: 'explore', component: ExploreComponent },
      { path: 'chat', component:  ChatComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
  
 
  // {path: '**', component:LandingPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }