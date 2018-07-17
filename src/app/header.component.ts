import { Component, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './templates/header.html'
})

export class HeaderComponent implements DoCheck {

    private isLoggedIn;
    private name;
    private message;
    private i=0;

    constructor(private userService: UserService) { }

    ngDoCheck() {
        
        if(localStorage.getItem('blogosphere_user_token')) {
            this.isLoggedIn = true;
            this.name = localStorage.getItem('blogosphere_user');
        } else {
            this.isLoggedIn = false;
        }
    }
}