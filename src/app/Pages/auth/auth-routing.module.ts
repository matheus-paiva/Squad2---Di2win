import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { TrocarSenhaComponent } from './trocar-senha/trocar-senha.component';



const routes: Routes = [
  {path:'',component:AuthComponent,
  children:[
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'cadastro',component:CadastroComponent},
    {path:'usernamerecovery',component:TrocarSenhaComponent},
  ]
},
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
