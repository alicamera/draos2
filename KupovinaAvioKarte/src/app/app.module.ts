import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule, MatInputModule,
  MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatRadioModule, MatSliderModule,
  MatSelectModule, MatNativeDateModule } from '@angular/material';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListaPonudaComponent } from './components/lista-ponuda/lista-ponuda.component';
import { KarticaPonudaComponent } from './components/kartica-ponuda/kartica-ponuda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PocetnaComponent,
    ListaPonudaComponent,
    KarticaPonudaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
