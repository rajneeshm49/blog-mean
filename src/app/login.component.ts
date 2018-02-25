import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
    templateUrl: './templates/login.component.html'
})

export class LoginComponent {
    user = {username:'', password:''};

    constructor(private userService: UserService) {}

    onSubmit(): void {
        this.userService.login(this.user).subscribe();
    }
}