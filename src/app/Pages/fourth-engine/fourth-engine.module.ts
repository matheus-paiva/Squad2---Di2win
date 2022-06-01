import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourthEngineRoutingModule } from './fourth-engine-routing.module';
import { FourthEngineComponent } from './fourth-engine.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FourthEngineComponent],
  imports: [
    CommonModule,
    FourthEngineRoutingModule,
    SharedModule
  ]
})
export class FourthEngineModule { }
