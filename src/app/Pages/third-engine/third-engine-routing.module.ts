import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdEngineComponent } from './third-engine.component';

const routes: Routes = [
  {path:'', component:ThirdEngineComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdEngineRoutingModule { }
