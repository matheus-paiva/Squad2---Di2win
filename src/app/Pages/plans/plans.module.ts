import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PlansComponent],
  imports: [
    CommonModule,
    PlansRoutingModule,
    SharedModule
  ]
})
export class PlansModule { }
