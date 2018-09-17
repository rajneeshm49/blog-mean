import { Component, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MyDialogComponent } from './my-dialog.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './templates/header.html'
})

export class HeaderComponent implements DoCheck {

    private isLoggedIn;
    private name;
    private message;
    private i=0;

    constructor(private router: Router, private dialog: MatDialog) { }

    ngDoCheck() {
        
        if(localStorage.getItem('blogosphere_user_token')) {
            this.isLoggedIn = true;
            this.name = localStorage.getItem('blogosphere_user');
        } else {
            this.isLoggedIn = false;
        }
    }

    logoutDialog(): void {
        const dialogRef = this.dialog.open(MyDialogComponent, {
          data: {
            ques: "Are you sure you want to logout?", button2msg: "Logout"
          }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if(result) {
            this.router.navigate(['/logout']);
          }
        });
      }
}