import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationsComponent } from './conversations/conversations.component';
import { ChatRouting } from './chat.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ChatRouting,
    FormsModule
  ],
  declarations: [ConversationsComponent]
})
export class ChatModule { }
