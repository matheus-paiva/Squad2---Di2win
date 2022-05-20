import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    SobreComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    
  
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
