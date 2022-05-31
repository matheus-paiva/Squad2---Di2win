import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { EngineTestComponent } from './components/engine-test/engine-test.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './Pages/auth/login/login.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    EngineTestComponent,
    
    
  
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule,SharedModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
