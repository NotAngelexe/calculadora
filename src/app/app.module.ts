import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolFijaComponent } from './pol-fija/pol-fija.component';
import { DivVoltComponent } from './div-volt/div-volt.component';
import { FormsModule } from '@angular/forms';
import { EmisorComponent } from './emisor/emisor.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PolFijaComponent,
    DivVoltComponent,
    EmisorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
