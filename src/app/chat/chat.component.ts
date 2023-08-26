import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service' ; // update the path to your service

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public messages: string[] = [];
  public message: string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getMessages().subscribe((msg: string) => {
      this.messages.push(msg);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = ''; // Clear the input after sending
  }
}
