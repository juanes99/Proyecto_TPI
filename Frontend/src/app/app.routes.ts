import { RouterModule, Routes } from '@angular/router';
import {ProductoComponent} from './pages/producto/producto.component'
import { ProcesoComponent } from './pages/proceso/proceso.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { ContactosComponent } from './pages/contactos/contactos.component'

const APP_ROUTES: Routes = [
  { path: 'home', component: ProductoComponent },
  { path: 'proceso', component: ProcesoComponent },
  { path: 'comprar', component:  ComprarComponent},
  { path: 'comunidad', component: ComunidadComponent },
  { path: 'contacto', component: ContactosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
