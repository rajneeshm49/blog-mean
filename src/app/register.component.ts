import { Component } from "@angular/core";
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './templates/register.component.html'
})

export class RegisterComponent {
    user = {firstname: '', lastname:'', username:'', password:'', email:'', confirm_pwd:''};
    errorMsg = '';
    successMsg = '';

    constructor(private userService: UserService, private router: Router) {}

    onSubmit():void {
        this.successMsg = '';
        this.errorMsg = '';
        this.userService.register(this.user).subscribe(res => {
            if(res.success === false) {
                this.errorMsg = res.message;
            } else {
                this.successMsg = res.message;
                console.log(this.successMsg);
                this.router.navigate(['/login']);

            }
        });
    }
    
}