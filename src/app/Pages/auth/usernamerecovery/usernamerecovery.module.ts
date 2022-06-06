import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsernamerecoveryRoutingModule } from './usernamerecovery-routing.module';
import { UsernamerecoveryComponent } from './usernamerecovery.component';


@NgModule({
  declarations: [UsernamerecoveryComponent],
  imports: [
    CommonModule,
    UsernamerecoveryRoutingModule
  ]
})
export class UsernamerecoveryModule { }
