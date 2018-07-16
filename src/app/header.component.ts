import { Component, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-header',
    templateUrl: './templates/header.html'
})

export class HeaderComponent implements DoCheck {

    private isLoggedIn;
    private name;
    private message;

    constructor(private userService: UserService, private messageService: MessageService, private flashMessage: FlashMessagesService) { }

    ngDoCheck() {
        if(this.messageService.show_msg != '') {
            this.flashMessage.show(this.messageService.show_msg, { cssClass: 'alert-success', timeout: 100000 });
            this.messageService.show_msg = '';
        }
        if(localStorage.getItem('blogosphere_user_token')) {
            this.isLoggedIn = true;
            this.name = localStorage.getItem('blogosphere_user');
        } else {
            this.isLoggedIn = false;
        }
    }
}