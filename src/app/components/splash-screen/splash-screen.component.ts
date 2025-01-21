import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-splash-screen',
  imports: [RouterModule],
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/home']); 
    }, 5000);  
  }
}
