import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreComponent,
    HomeComponent,
    
  
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
