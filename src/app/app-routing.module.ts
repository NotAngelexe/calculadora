import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmisorComponent } from './emisor/emisor.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'emisor', component: EmisorComponent },
  { path: '**', redirectTo: 'menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
