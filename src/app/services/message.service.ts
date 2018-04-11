import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    show_msg = '';

    clearMessage() {
        this.show_msg = '';
    }
}