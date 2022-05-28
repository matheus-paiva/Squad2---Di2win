import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondEngineRoutingModule } from './second-engine-routing.module';
import { SecondEngineComponent } from './second-engine.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SecondEngineComponent],
  imports: [
    CommonModule,
    SecondEngineRoutingModule,
    SharedModule
  ]
})
export class SecondEngineModule { }
