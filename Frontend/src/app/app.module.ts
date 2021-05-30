import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTING} from './app.routes'


import { AppComponent } from './app.component';
import {ProductoComponent} from './pages/producto/producto.component'
import {NavbarComponent} from './shared/navbar/navbar.component';
import { ProcesoComponent } from './pages/proceso/proceso.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { ContactosComponent } from './pages/contactos/contactos.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    NavbarComponent,
    ProcesoComponent,
    ComunidadComponent,
    ComprarComponent,
    ContactosComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
