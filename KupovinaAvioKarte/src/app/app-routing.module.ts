import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { ListaPonudaComponent } from './components/lista-ponuda/lista-ponuda.component';
import { KarticaPonudaComponent } from './components/kartica-ponuda/kartica-ponuda.component';
import { PonudaComponent } from './components/ponuda/ponuda.component';
import { PutnikComponent } from './components/putnik/putnik.component';
import { ServisPonudaComponent } from './components/servis-ponuda/servis-ponuda.component';
import { PlacanjeComponent } from './components/placanje/placanje.component';

const routes: Routes = [
  { path: '', component: PocetnaComponent },
  { path: 'pocetna', component: PocetnaComponent },
  { path: 'listaPonuda', component: ListaPonudaComponent },
  { path: 'ponuda', component: PonudaComponent },
  { path: 'putnik', component: PutnikComponent },
  { path: 'servis', component: ServisPonudaComponent },
  { path: 'placanje', component: ServisPonudaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
