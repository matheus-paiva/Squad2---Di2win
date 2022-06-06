import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { EngineTestComponent } from './engine-test/engine-test.component';

const SHARED_COMPONENTS = [FooterComponent,EngineTestComponent];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[SHARED_COMPONENTS],
})
export class SharedModule { }
