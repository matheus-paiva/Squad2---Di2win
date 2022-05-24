import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { SobreComponent } from './Pages/sobre/sobre.component';
import { HomeComponent } from './Pages/home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { LoginComponent } from './Pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { TrocarSenhaComponent } from './Pages/trocar-senha/trocar-senha.component';
import { FirstEngineComponent } from './Pages/first-engine/first-engine.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    SobreComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    FooterComponent,
    TrocarSenhaComponent,
    FirstEngineComponent
    
  
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
