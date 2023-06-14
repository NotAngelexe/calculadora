import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolFijaComponent } from './pol-fija/pol-fija.component';
import { PolRetroComponent } from './pol-retro/pol-retro.component';

@NgModule({
  declarations: [
    AppComponent,
    PolFijaComponent,
    PolRetroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
