import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsernamerecoveryComponent } from './usernamerecovery.component';

const routes: Routes = [
  {path:'',component:UsernamerecoveryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsernamerecoveryRoutingModule { }
