import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { MaterialModule } from 'src/app/material.module';
import { LogInModule } from './log-in/log-in.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LogInModule,
    SignUpModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
