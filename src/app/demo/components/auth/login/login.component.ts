import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbacoToastService } from 'src/app/general/services/abaco-toast.service';
import { ErrorApp } from 'src/app/general/shared/error-app';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public layoutService: LayoutService,
        private abacoToastService: AbacoToastService,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            user: ['', [Validators.required]],
            password: ['', Validators.required],
        });
    }

    login() {
        if (!this.loginForm.valid) {
            this.abacoToastService.showError(
                'Debes completar los datos para poder ingresar'
            );
            return;
        }

        const user = this.loginForm.get('user').value;
        const password = this.loginForm.get('password').value;
        this.authService.login(user, password).subscribe(
            (r) => this.router.navigate(['/']),
            (e: ErrorApp) => this.abacoToastService.showError(e.clientMessage)
        );
    }
}
