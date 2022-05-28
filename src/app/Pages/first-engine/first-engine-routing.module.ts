import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstEngineComponent } from './first-engine.component';

const routes: Routes = [
  {path:'',component:FirstEngineComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstEngineRoutingModule { }
