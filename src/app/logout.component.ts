import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './templates/logout.component.html'
})

export class LogoutComponent implements OnInit {

    constructor(private router: Router) { }
    
    ngOnInit() {
        localStorage.removeItem('blogosphere_user_token');
        localStorage.removeItem('blogosphere_user');
        this.router.navigate(['/login']);
    }
}