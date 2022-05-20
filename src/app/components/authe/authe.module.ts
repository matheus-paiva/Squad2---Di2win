import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutheRoutingModule } from './authe-routing.module';
import { AutheComponent } from './authe.component';


@NgModule({
  declarations: [
    AutheComponent
  ],
  imports: [
    CommonModule,
    AutheRoutingModule
  ]
})
export class AutheModule { }
