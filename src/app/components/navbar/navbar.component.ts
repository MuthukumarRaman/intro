import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router){}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
  getImageSrc(route: string, iconName: string): string {
    if (this.router.url === route) {
      return `/assets/svg/${iconName}_active.svg`;  // Active image
    } else {
      return `/assets/svg/${iconName}.svg`;  // Default image
    }
  }

  navigateTo(route: string) {
    console.log(route)
    this.router.navigate([route]);
  }
}
