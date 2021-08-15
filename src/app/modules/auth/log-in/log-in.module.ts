import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInComponent } from './log-in.component';
import { MaterialModule } from 'src/app/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '../auth-routing.module';


@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [
    LogInComponent
  ],
})
export class LogInModule { }
