import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  data: any[] = [];
  private subscription!: Subscription;

  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    this.subscription = this.dataService.data.pipe(
      map(ds => ds ? ds.data || [] : []),
      tap(data => this.data = data)
    ).subscribe();
    console.log(this.data)
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}