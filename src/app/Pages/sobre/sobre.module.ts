import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SobreComponent } from './sobre.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';


@NgModule({
  declarations: [SobreComponent,ContactComponent],
  imports: [
    CommonModule,
    SobreRoutingModule,
    SharedModule
  ]
})
export class SobreModule { }
