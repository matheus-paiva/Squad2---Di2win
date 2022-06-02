import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PlansComponent],
  imports: [
    CommonModule,
    PlansRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class PlansModule { }
