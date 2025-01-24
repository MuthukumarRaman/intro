import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from "../../environments/environment"
import { getAuth, GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';
import {SnackBar} from "../services/snackbar"
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseServices {

  
  
  private app = initializeApp({
    apiKey: "AIzaSyCsdsCz4fWypHo9fwuiCtS4xCiy1q7z9-8",
    authDomain: "intro-me-today.firebaseapp.com",
    projectId: "intro-me-today",
    storageBucket: "intro-me-today.firebasestorage.app",
    messagingSenderId: "699768767684",
    appId: "1:699768767684:web:c9a266d558c71fb1d7b591",
    measurementId: "G-3NJQLNW6BV"
  }
);
  constructor(private SnackBar:SnackBar,private router:Router) {}
  private auth = getAuth(this.app);
  private googleProvider = new GoogleAuthProvider();

  signInWithGoogle() {
    console.log(environment);
    signInWithPopup(this.auth, this.googleProvider)
      .then((result) => {
        // Get user info
        const user = result.user;
        console.log("User Info:", user);
        this.SnackBar.Stackbar("Login Successfully!")
        this.router.navigate(['/dashboard']); 
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
        this.SnackBar.Stackbar("Login Failed!")
      });
  }

}
