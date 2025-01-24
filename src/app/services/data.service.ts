import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<any>(null);
  data = this.dataSubject.asObservable();

  constructor(private http: HttpClient,private router:Router) {}

   loadData() {
    const path = this.router.url
    console.log("path",path)
    this.http.get(`/assets/json${path}.json`).subscribe(
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