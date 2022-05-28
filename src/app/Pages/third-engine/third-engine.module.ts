import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdEngineRoutingModule } from './third-engine-routing.module';
import { ThirdEngineComponent } from './third-engine.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ThirdEngineComponent],
  imports: [
    CommonModule,
    ThirdEngineRoutingModule,
    SharedModule
  ]
})
export class ThirdEngineModule { }
