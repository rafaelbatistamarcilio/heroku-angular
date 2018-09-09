import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversationsComponent } from './conversations/conversations.component';

const routes: Routes = [
  {
    path: '',
    component: ConversationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRouting { }
