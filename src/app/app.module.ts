import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { EngineTestComponent } from './components/engine-test/engine-test.component';
import { SharedModule } from './shared/shared.module';
<<<<<<< HEAD
import { LoginComponent } from './Pages/auth/login/login.component';

=======
import { PaymentComponent } from './Pages/payment/payment.component';
import { NgxMaskModule } from 'ngx-mask';
>>>>>>> 0d92c92597d06d0fe74fdd191a2c39530fb148c0





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    EngineTestComponent,
<<<<<<< HEAD
    
    
=======
    CadastroComponent,
    LoginComponent,
    TrocarSenhaComponent,
    PaymentComponent,
>>>>>>> 0d92c92597d06d0fe74fdd191a2c39530fb148c0
  
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule,SharedModule,ReactiveFormsModule, NgxMaskModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
