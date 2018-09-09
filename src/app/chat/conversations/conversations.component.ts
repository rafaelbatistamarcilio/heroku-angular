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

    this.socket = io('http://localhost:3001');

    this.socket.on('connect', () => {
      console.log('Connected');

      this.socket.on('chat-message', (data: { detail: string, date: Date }[]) => {
        console.log('messages recieved', data);
        this.messages = data;
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
  }

}
