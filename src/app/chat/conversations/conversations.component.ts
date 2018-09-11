import { environment } from './../../../environments/environment';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  private socket;
  public messages: { detail: string, date: Date }[];
  public message: string;

  @ViewChild('messageContainer')
  public messageContainer: ElementRef<any>;

  constructor() {
    this.messages = [];
  }

  ngOnInit() {

    this.socket = io(environment.API.CHAT_WS);

    this.socket.on('connect', () => {
      console.log('Connected');

      this.socket.on('chat-message', (data: { detail: string, date: Date }[]) => {
        console.log('messages recieved', data);
        this.messages = data;
        this.scrollToLastMessage();
      });
    });

    this.socket.on('exception', (data) => {
      console.log('event', data);
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected');
    });

  }

  sendMessage() {
    this.messages.push({ detail: this.message, date: new Date() });
    this.socket.emit('chat-message', { detail: this.message, date: new Date() });
    this.message = '';
    this.scrollToLastMessage();
  }

  async scrollToLastMessage() {
    const scrollInterval = this.messages.length > 0 ? this.messages.length - 5 : 0;
    this.scrollMessages(scrollInterval);
  }

  async getMessageHeight(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        const messages = Array.from(this.messageContainer.nativeElement.querySelectorAll('.card')) as HTMLDivElement[];
        const height: number = messages.length > 0 ? (messages[messages.length - 1].scrollHeight) + 10 : 0;
        resolve(height);
      }, 1000);
    });
  }

  async scrollMessages(numberOfMessagesToScroll) {
    const height = await this.getMessageHeight();
    window.scrollTo({ top: height * numberOfMessagesToScroll });
  }
}
