import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstEngineRoutingModule } from './first-engine-routing.module';
import { FirstEngineComponent } from './first-engine.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FirstEngineComponent],
  imports: [
    CommonModule,
    FirstEngineRoutingModule,
    SharedModule
  ]
})
export class FirstEngineModule { }
