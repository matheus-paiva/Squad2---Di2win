import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContactComponent } from '../../contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
  ],
  providers: []
})
export class MainModule { }
