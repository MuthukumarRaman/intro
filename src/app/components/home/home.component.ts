import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
constructor(private dataService: DataService){}
private subscription!: Subscription;
private homeData: any;
ngOnInit() {
  this.dataService.loadData()
  this.loadData()
  console.log();
  
}
loadData(){
  this.dataService.data.subscribe((newData) => {
 console.log(newData);
 this.homeData = newData
 })
}
ngOnDestroy() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}

}
