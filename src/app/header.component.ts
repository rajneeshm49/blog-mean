import { Component, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';

@Component({
    selector: 'app-header',
    templateUrl: './templates/header.html'
})

export class HeaderComponent implements DoCheck {

    private isLoggedIn;
    private name;
    private message;

    constructor(private userService: UserService, private messageService: MessageService) { }

    ngDoCheck() {
        if(this.messageService.show_msg != '') {
            this.message = this.messageService.show_msg;
            this.messageService.clearMessage();
        }
        if(localStorage.getItem('blogosphere_user_token')) {
            this.isLoggedIn = true;
            this.name = localStorage.getItem('blogosphere_user');
        } else {
            this.isLoggedIn = false;
        }
    }
}