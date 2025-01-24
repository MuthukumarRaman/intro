import { Component } from '@angular/core';
import {SharedModule} from "../../modules/SharedModuls"
@Component({
  selector: 'app-dashboard',
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
