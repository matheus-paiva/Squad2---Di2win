import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

const SHARED_COMPONENTS = [FooterComponent];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [
    CommonModule,
  ],
  exports:[SHARED_COMPONENTS],
})
export class SharedModule { }
