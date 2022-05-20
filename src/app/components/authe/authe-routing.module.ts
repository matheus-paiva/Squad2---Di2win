import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutheComponent } from './authe.component';

const routes: Routes = [{ path: '', component: AutheComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutheRoutingModule { }
