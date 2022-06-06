import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { ClickOutsideDirective } from './directives/click-outside.directive';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ClickOutsideDirective,
  
    
  
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule,SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
