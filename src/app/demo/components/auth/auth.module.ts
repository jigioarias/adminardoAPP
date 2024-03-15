import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeneralModule } from 'src/app/general/general.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        GeneralModule
    ]
})
export class AuthModule { }
