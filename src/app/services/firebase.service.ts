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

  
  
  private app = initializeApp(environment.fireBaseenv);
  constructor(private SnackBar:SnackBar,private router:Router) {}
  private auth = getAuth(this.app);
  private googleProvider = new GoogleAuthProvider();
  signInWithGoogle() {
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
