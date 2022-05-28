import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourthEngineComponent } from './fourth-engine.component';

const routes: Routes = [
  {path:'',component:FourthEngineComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourthEngineRoutingModule { }
