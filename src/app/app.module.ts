import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolFijaComponent } from './pol-fija/pol-fija.component';
import { PolRetroComponent } from './pol-retro/pol-retro.component';
import { DivVoltComponent } from './div-volt/div-volt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmisorComponent } from './emisor/emisor.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PolFijaComponent,
    PolRetroComponent,
    DivVoltComponent,
    EmisorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
