import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Subscription } from 'rxjs';
import { SharedModule } from '../../../modules/SharedModuls'
import { FirebaseServices } from "../../../services/firebase.service"
@Component({
  selector: 'app-login',
  imports:[SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginData: any;
  private subscription!: Subscription;
  
  constructor(private dataService: DataService,private FirebaseServices:FirebaseServices) {}
  
  ngOnInit() {
    this.dataService.loadData()
    this.loadData()
  }
  loadData(){
    this.dataService.data.subscribe((newData) => {
   console.log(newData);
   this.loginData = newData
   })
  }


  googlesignin(){
    this.FirebaseServices.signInWithGoogle()
  }
  signin(data: any) {
    if(data=="Google"){
    this.googlesignin()
    } else if(data=="Facebook"){
      // this.facebooksigin()
    }
  }
 

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}