import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AbacoToastService } from './services/abaco-toast.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastModule,
    MessagesModule
  ],
  providers: [
    AbacoToastService, MessageService
  ]
})
export class GeneralModule { }
