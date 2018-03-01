import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
    templateUrl: './templates/login.component.html'
})

export class LoginComponent {
    user = {username:'', password:''};
    errorMsg = '';

    constructor(private userService: UserService) {}

    onSubmit(): void {
        this.userService.login(this.user).subscribe(
            res => {
                if(res.success === true) {
                    this.userService.isLoggedIn = true;
                    this.userService.token = res.token;
                    this.errorMsg = 'Successfull!';
                } else {
                    this.errorMsg = res.message;
                }
                
            }
        );
    }
}