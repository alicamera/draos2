import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule, MatInputModule,
  MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatRadioModule, MatSliderModule,
  MatSelectModule, MatNativeDateModule } from '@angular/material';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListaPonudaComponent } from './components/lista-ponuda/lista-ponuda.component';
import { KarticaPonudaComponent } from './components/kartica-ponuda/kartica-ponuda.component';

import { LetService } from './services/let.service';
import { UkupnoComponent } from './components/ukupno/ukupno.component';
import { PonudaComponent } from './components/ponuda/ponuda.component';
import { PutnikComponent } from './components/putnik/putnik.component';
import { ServisPonudaComponent } from './components/servis-ponuda/servis-ponuda.component';
import { PlacanjeComponent } from './components/placanje/placanje.component';
import { HttpClientModule  } from '@angular/common/http'; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PocetnaComponent,
    ListaPonudaComponent,
    KarticaPonudaComponent,
    UkupnoComponent,
    PonudaComponent,
    PutnikComponent,
    ServisPonudaComponent,
    PlacanjeComponent


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
    MatSliderModule,
    FontAwesomeModule,
    MatStepperModule,
    HttpClientModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
