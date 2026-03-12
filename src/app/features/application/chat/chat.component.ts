import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    imports: [CommonModule]
})
export class ChatComponent {
  public chatSearch = false;
  showChatSearch(){
    this.chatSearch = !this.chatSearch;
  }
  
}
