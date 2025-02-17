import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
@Injectable({
  providedIn: 'root'
})
export class SnackBar {

  constructor(private snackBar:MatSnackBar) {}
  Stackbar(message:any) {

        this.snackBar.open(message, "Close", {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "bottom",
            panelClass: "success-snackbar",
          });
      }
}
