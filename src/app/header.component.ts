import { Component, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './templates/header.html'
})

export class HeaderComponent implements DoCheck {

    private isLoggedIn;

    constructor(private userService: UserService) { }

    ngDoCheck() {
        this.isLoggedIn = this.userService.isLoggedIn;
    }


}
