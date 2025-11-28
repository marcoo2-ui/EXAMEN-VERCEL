import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Personajes } from './componentes/personajes/personajes';
import { Personaje } from './componentes/personaje/personaje';

export const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'personajes', component: Personajes},
  {path: 'personaje/detalle/:id', component: Personaje}
];
