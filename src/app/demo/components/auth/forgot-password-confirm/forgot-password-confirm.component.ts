import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbacoToastService } from 'src/app/general/services/abaco-toast.service';
import { ErrorApp } from 'src/app/general/shared/error-app';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-forgot-password-confirm',
    templateUrl: './forgot-password-confirm.component.html',
    styleUrl: './forgot-password-confirm.component.scss',
})
export class ForgotPasswordConfirmComponent {
    forgotConfirmForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public layoutService: LayoutService,
        private abacoToastService: AbacoToastService,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.forgotConfirmForm = this.formBuilder.group({
            code: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-+]).{8,}$/)]],
        });

        if (!this.authService.isUserInRecovery()) {
            this.router.navigate(['/']);
        }
    }

    recovery() {
        if (!this.forgotConfirmForm.valid) {
            this.abacoToastService.showError(
                'Debes completar la información para recuperar tu acceso'
            );
            return;
        }

        const code = this.forgotConfirmForm.get('code').value;
        const password = this.forgotConfirmForm.get('password').value;

        this.authService.recovery(code, password).subscribe(
            (result) => {
                const message =
                    'Se completó la recuperación de tu cuenta, puedes volver a acceder';
                this.abacoToastService.showSuccess(message);
                this.router.navigate(['/auth/login']);
            },
            (e: ErrorApp) => this.abacoToastService.showError(e.clientMessage)
        );
    }
}
