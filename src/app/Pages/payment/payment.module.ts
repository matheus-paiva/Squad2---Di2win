import { PaymentComponent } from './payment.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ PaymentComponent ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
  ]
})
export class PaymentModule { }
