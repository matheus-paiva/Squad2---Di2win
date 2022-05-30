import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

const SHARED_COMPONENTS = [FooterComponent];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[SHARED_COMPONENTS],
})
export class SharedModule { }
