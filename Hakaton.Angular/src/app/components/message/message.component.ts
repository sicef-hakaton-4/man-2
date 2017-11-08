import { Component, Input } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() message: Message;

  getUser(): string{
    return localStorage.getItem('id');
  }
  
  isSender() : boolean{
    return this.message.SenderId == this.getUser();
  }
}
