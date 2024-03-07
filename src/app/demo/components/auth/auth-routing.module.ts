import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgotPasswordConfirmComponent } from './forgot-password-confirm/forgot-password-confirm.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: 'forgot', component: ForgotPasswordComponent },
        { path: 'forgotConfirm', component: ForgotPasswordConfirmComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
