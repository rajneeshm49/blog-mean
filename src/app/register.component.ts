import { Component } from "@angular/core";
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { MessageService } from './services/message.service';

@Component({
    templateUrl: './templates/register.component.html'
})

export class RegisterComponent {
    user = {firstname: '', lastname:'', username:'', password:'', email:'', confirm_pwd:''};
    errorMsg = '';
    successMsg = '';

    constructor(private userService: UserService, private messageService: MessageService, private router: Router) {}

    onSubmit():void {
        this.successMsg = '';
        this.errorMsg = '';
        this.userService.register(this.user).subscribe(res => {
            if(res.success === false) {
                this.errorMsg = res.message;
            } else {
                this.successMsg = res.message;
                this.messageService.show_msg = 'User successfully registered. Please login to explore Blogosphere';
                this.router.navigate(['/login']);

            }
        });
    }
    
}