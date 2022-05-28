import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondEngineComponent } from './second-engine.component';

const routes: Routes = [
  {path:'',component:SecondEngineComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondEngineRoutingModule { }
