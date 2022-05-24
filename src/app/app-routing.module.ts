import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./components/pages/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'authe',
    loadChildren: () =>
      import('./components/pages/authe/authe.module').then(m => m.AutheModule),
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
