import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    
  
  ],
  imports: [
    BrowserModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
