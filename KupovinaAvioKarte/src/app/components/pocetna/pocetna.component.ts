import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Data } from '@angular/router';
import { InfoLet } from '../../models/InfoLet';
import { LetService } from '../../services/let.service';
import { Letovi } from '../../models/Letovi';
import { empty } from 'rxjs';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {
  form: FormGroup;
  vratiLetove: Array<Letovi> =[];
  infoLet: InfoLet;
  aerodrom: Array<string> = [];
  sakrij: boolean=true;

  constructor(private formBuilder: FormBuilder, private router: Router, private letService: LetService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      polaziste: ['', Validators.required],
      odrediste: ['', Validators.required],
      klasa: ['', Validators.required],
      samoDirektni:  [''],
      // brOsoba:  ['', Validators.required],
      dvosmjerna: [''],
      jednosmjerna: [''],
      datumpolaska: ['', Validators.required],
      datumpovratka: ['', Validators.required],

    });
  }

  async trazi() {
  let info = new InfoLet(this.form.value.dvosmjerna, this.form.value.polaziste,
      this.form.value.odrediste, this.form.value.datumpolaska, this.form.value.datumpovratka,
      this.form.value.klasa, this.form.value.samoDirektni); // this.form.value.brOsoba,
  //console.log('Info o letu sa pocetne :');
  //console.log(infoLet);
  this.vratiLetove= await this.letService.getLet(info);
  this.infoLet=info;
  this.aerodrom= await this.letService.getAerodrmi();

  console.log('vratila se iz servisa');
  console.log(this.vratiLetove);
  this.router.navigate(['listaPonuda']);
  }
  ngOnDestroy(): void {

   this.letService.vratiLetove=this.vratiLetove;
   //console.log(this.letService.vratiLetove);
    this.letService.infoLet=this.infoLet;
    this.letService.aerodromi=this.aerodrom;

  }

}
