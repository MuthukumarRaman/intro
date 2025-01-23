import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<any>(null);
  data = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadData();
    console.log("start")
  }

  private loadData() {
    this.http.get('/assets/json/login.json').subscribe(
      (response) => {
        this.dataSubject.next(response);
      },
      (error) => {
        console.error('Error loading JSON data:', error);
        this.dataSubject.next(null);
      }
    );
  }
}