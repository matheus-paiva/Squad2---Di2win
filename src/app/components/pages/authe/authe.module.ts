import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutheRoutingModule } from './authe-routing.module';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutheRoutingModule,
    FormsModule,
  ]
})
export class AutheModule { }
