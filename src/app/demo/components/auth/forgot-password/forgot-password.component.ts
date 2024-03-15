import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbacoToastService } from 'src/app/general/services/abaco-toast.service';
import { ErrorApp } from 'src/app/general/shared/error-app';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
    forgotForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public layoutService: LayoutService,
        private abacoToastService: AbacoToastService,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.forgotForm = this.formBuilder.group({
            user: ['', [Validators.required]],
        });
    }

    forgotPwd() {
        if (!this.forgotForm.valid) {
            this.abacoToastService.showError(
                'Debes ingresar tu usuario para recuperar tu acceso'
            );
            return;
        }

        const user = this.forgotForm.get('user').value;

        this.authService.forgotPwd(user).subscribe(
            (result) => {
                const message = 'Te enviamos un mensaje a: ' + result.message+ ' para que completes la recuperación de tu cuenta';
                this.abacoToastService.showSuccess(message);
                this.router.navigate(['/auth/forgotConfirm']);
            },
            (e: ErrorApp) => this.abacoToastService.showError(e.clientMessage)
        );
    }
}
