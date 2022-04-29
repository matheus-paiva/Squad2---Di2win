import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentsComponent } from './components/parents/parents.component';
import { DirectComponent } from './components/direct/direct.component';
import { RenderComponent } from './components/render/render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { InlockComponent } from './components/inlock/inlock.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentsComponent,
    DirectComponent,
    RenderComponent,
    EventosComponent,
    InlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
