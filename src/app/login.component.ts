import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './templates/login.component.html'
})

export class LoginComponent {
    user = {username:'', password:''};
    errorMsg = '';

    constructor(private userService: UserService, private router: Router) {}

    onSubmit(): void {
        this.userService.login(this.user).subscribe(
            res => {
                if(res.success === true) {
                    localStorage.setItem('blogosphere_user_token', res.token);
                    localStorage.setItem('blogosphere_user', res.name);                
                    this.router.navigate(['/home']); 
                    
                } else {
                    this.errorMsg = res.message;
                }
                
            }
        );
    }
}