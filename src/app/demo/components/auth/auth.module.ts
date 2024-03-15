import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { GeneralModule } from 'src/app/general/general.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordConfirmComponent } from './forgot-password-confirm/forgot-password-confirm.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        GeneralModule,
        ToastModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ForgotPasswordComponent,
        ForgotPasswordConfirmComponent
    ]
})
export class AuthModule { }
