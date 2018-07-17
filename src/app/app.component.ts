import { Component, OnInit, DoCheck } from '@angular/core';
import { Route, Router, NavigationEnd } from '@angular/router';
import { MessageService } from './services/message.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

   constructor(private router: Router, private messageService: MessageService, private flashMessage: FlashMessagesService) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
 }
 ngDoCheck() {
    if(this.messageService.show_msg != '') {
        this.flashMessage.show(this.messageService.show_msg, { cssClass: 'alert-success' });
        this.messageService.show_msg = '';
    }
 }
}
