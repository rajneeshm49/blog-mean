import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './templates/logout.component.html'
})

export class LogoutComponent implements OnInit {

    constructor(private userService: UserService, private router: Router) { }
    
    ngOnInit() {
        this.userService.isLoggedIn = false;
        this.userService.token = '';
        this.router.navigate(['/login']);
    }
}