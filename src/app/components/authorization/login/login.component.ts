import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Subscription } from 'rxjs';
import { SharedModule } from '../../../imports'
@Component({
  selector: 'app-login',
  imports:[SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginData: any;
  private subscription!: Subscription;

  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    // this.subscription = this.dataService.data.pipe(
    //   map(ds => ds ? ds.data || [] : []),
    //   tap(data => this.data = data)
    // ).subscribe();
    this.dataService.loadData()
    this.loadData()
  }

   loadData(){
    this.dataService.data.subscribe((newData) => {
   console.log(newData);
   this.loginData = newData
   })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}