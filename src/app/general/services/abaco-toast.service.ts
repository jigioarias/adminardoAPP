import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class AbacoToastService {
    constructor(private messageService: MessageService) {}

    showSuccess(message: string, title?: string) {
        this.messageService.add({
            key: 'tc',
            severity: 'success',
            summary: title ? title : 'Éxito',
            detail: message,
        });
    }

    showInfo(message: string, title?: string) {
        this.messageService.add({
            key: 'tc',
            severity: 'info',
            summary: title ? title : 'Información',
            detail: message,
        });
    }

    showWarn(message: string, title?: string) {
        this.messageService.add({
            key: 'tc',
            severity: 'warn',
            summary: title ? title : 'Precaución',
            detail: message,
        });
    }

    showError(message: string, title?: string) {
        this.messageService.add({
            key: 'tc',
            severity: 'error',
            summary: title ? title : 'Error',
            detail: message,
        });
    }
}
