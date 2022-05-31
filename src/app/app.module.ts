import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { EngineTestComponent } from './components/engine-test/engine-test.component';
import { SharedModule } from './shared/shared.module';
<<<<<<< HEAD
import { NgxMaskModule } from 'ngx-mask';
import { PaymentComponent } from './Pages/payment/payment.component';
=======
>>>>>>> ae4f212011e1bc87369db433bc89f45090008ecd





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    EngineTestComponent,
<<<<<<< HEAD
    PaymentComponent
=======
    CadastroComponent,
    LoginComponent,
    TrocarSenhaComponent,
  
>>>>>>> ae4f212011e1bc87369db433bc89f45090008ecd
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule,SharedModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
