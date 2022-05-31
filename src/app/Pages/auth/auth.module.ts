import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TrocarSenhaComponent } from './trocar-senha/trocar-senha.component';


@NgModule({
  declarations: [
    // CadastroComponent,
    // LoginComponent,
    // TrocarSenhaComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }
