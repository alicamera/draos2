import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { ListaPonudaComponent } from './components/lista-ponuda/lista-ponuda.component';
import { KarticaPonudaComponent } from './components/kartica-ponuda/kartica-ponuda.component';

const routes: Routes = [

  { path: 'pocetna', component: PocetnaComponent },
  { path: 'listaPonuda', component: ListaPonudaComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
