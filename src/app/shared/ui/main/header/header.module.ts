import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HeaderRoutingModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
