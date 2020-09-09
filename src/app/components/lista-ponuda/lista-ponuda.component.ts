import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { LetService } from '../../services/let.service';
import { Letovi } from '../../models/Letovi';
import { InfoLet } from '../../models/InfoLet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-ponuda',
  templateUrl: './lista-ponuda.component.html',
  styleUrls: ['./lista-ponuda.component.css']
})
export class ListaPonudaComponent implements OnInit {
  subscription: Subscription;

  filtersLoaded: Promise<boolean> ;
  form: FormGroup;
  letovi: Array<Letovi> ;
  infoLet: InfoLet;
  aerodromi: Array<string> ;
  items: any = [];
  items1: any = [];
  pamti: any = [];
  pamtiKom: any = [];
  pamtiAero: any = [];
  najboljaCijena = 99999999;
  najboljaTrajanje = '99d 99h 99min';

  najjeftinijaCijena = 999999;
  najjeftinijaTrajanje = '99d 99h 99min';

  najkracaCijena = 999999;
  najkracaTrajanje = '99d 99h 99min';

  cijena = 1;
  showcijena = 1 ;

  pocetniLetovi: Array<Letovi> ;
  filtriraniLetovi: Array<Letovi> ;

  constructor(private formBuilder: FormBuilder, private router: Router, private avRoute: ActivatedRoute, private letService: LetService) {
    this.infoLet = this.letService.infoLet;
    //console.log('jjj', this.infoLet);
    this.aerodromi = this.letService.aerodromi;
    //console.log('jjj', this.aerodromi);
    this.letovi = this.letService.vratiLetove;
    console.log(this.letovi)
     }

  async ngOnInit() {
    this.filtersLoaded = Promise.resolve(true);
    this.form = this.formBuilder.group({
      polaziste: ['', Validators.required],
      odrediste: ['', Validators.required],
      klasa: ['', Validators.required],
      availability:  ['', Validators.required],
      direkt:  ['', Validators.required],
      direkt1:  ['', Validators.required],
      direkt2:  ['', Validators.required],
      brOsoba:  ['', Validators.required],
      timePolazak: ['', Validators.required],
      Kofer: ['', Validators.required],
    });
    // (click)="onCheckboxChange(e,$event)"

    // ovdje bilo poziv servisa
/*
    this.infoLet = new InfoLet(true, 'Sarajevo','Berlin', new Date('2020-02-19'), new Date('2020-02-20'),'Ekonomska', true); // 2,
    console.log('Let info', this.infoLet);
    this.letovi = await this.letService.getVraceneLetove();

    // tslint:disable-next-line: max-line-length
    const let1 = new Letovi(true, 'Sarajevo','./../../assets/index1.png','Berlin','../../../assets/index.png', new Date('2020-02-19'), new Date('2020-02-20'),'Ekonomska', 540, 'SJJ', 'FXL', '00d 03h 20min', 1, 'Turkish airlines', 'Lufthansa', '10:30', '15:20', '10:30', '15:20');
    // console.log("datum polaska prvog",let1.datumPolaska.toDateString());
    this.letovi.push(let1);

      // tslint:disable-next-line: max-line-length
    const let11 = new Letovi(true, 'Sarajevo','./../../assets/index1.png','Berlin','../../../assets/index.png', new Date('2020-02-19'), new Date('2020-02-20'),'Ekonomska', 200, 'SJJ', 'SXF', '00d 07h 20min', 4, 'Turkish airlines', 'Lufthansa', '10:30', '15:20', '10:30', '15:20');
    this.letovi.push(let11);

    const let12 = new Letovi(true, 'Sarajevo','./../../assets/index1.png','Berlin','../../../assets/index.png', new Date('2020-02-19'), new Date('2020-02-20'),'Ekonomska', 200, 'SJJ', 'SXF', '00d 07h 20min', 4, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '10:30', '15:20');
    this.letovi.push(let12);
*/
    console.log('LEtovi u listi letova', this.letovi);
    // console.log(this.letovi);

    this.letovi.forEach(element => {
      // console.log("sati",element.trajanje.substr(4,2));
      // console.log("minute",this.najkracaTrajanje.substr(8,2));

      if (element.cijena < this.najjeftinijaCijena) {
        this.najjeftinijaCijena = element.cijena;
        this.najjeftinijaTrajanje = element.trajanje;
      }

      if (element.trajanje.substr(4, 2) < this.najkracaTrajanje.substr(4, 2) || element.trajanje.substr(8, 2) < this.najkracaTrajanje.substr(8, 2)) {
        this.najkracaCijena = element.cijena;
        this.najkracaTrajanje = element.trajanje;
      }
      /*
      if(element.cijena<=this.najjeftinijaCijena ||
        ( element.trajanje.substr(4,2)<=this.najkracaTrajanje.substr(4,2)
        && element.trajanje.substr(8,2)<this.najkracaTrajanje.substr(8,2))) {
        this.najboljaCijena=element.cijena;
        this.najboljaTrajanje=element.trajanje;

  }
  */

});
// console.log("najbolje",this.najboljaCijena, this.najboljaTrajanje);
    // console.log('njajefitinije', this.najjeftinijaCijena, this.najjeftinijaTrajanje);
    // console.log('najkrace', this.najkracaCijena, this.najkracaTrajanje);
    this.pocetniLetovi = this.letovi;
    this.filtriraniLetovi = this.pocetniLetovi;
    this.items = this.pocetniLetovi;
    this.aerodromi=["SJJ", "FXL", "SXL"];
}

onCheckboxChangeAerodrom(event: any) {
  // if(this.items.length<1) this.items=this.filtriraniLetovi;

  this.filtriraniLetovi.forEach(element => {
    if (event.target.checked == true && (event.target.defaultValue == element.aerodromDolaska || event.target.defaultValue == element.aerodromPolaska)) {
      this.items1.push(element);
      this.pamtiAero=this.items;
      console.log("PAMTI", this.pamtiAero);
    }
    else if(event.target.checked == false){
     // alert("ELSEE");
      this.items = this.pamtiAero;
      this.items1=this.pamtiAero;
    }
  });
  console.log("ITEMS", this.items, "ITEMS1", this.items1);
  this.items = this.items1.filter(value => this.items.includes(value));
  this.letovi = this.items;
  this.items1 = [];

}

onCheckboxChange(event: any, checkbox) {

  // if(this.items.length<1) this.items=this.pocetniLetovi;

  if (event.target.defaultValue == 'Direktni' && event.target.checked == true) {
    this.pamti = this.items;
    const checkboxes = document.getElementsByName('check');
    checkboxes.forEach((item) => {
        if ((item as HTMLInputElement).value !== event.target.value) {
        (item as HTMLInputElement).checked = false;
        // event.target.checked == true;

      }
    });

    this.filtriraniLetovi.forEach(element => {
      if (element.brStajanja == 0) {
        this.items1.push(element);


      }
    });

    // this.items=this.items1.concat(this.items);
    this.items = this.items1.filter(value => this.items.includes(value));

  } else if (event.target.defaultValue == '1' && event.target.checked == true) {

    const checkboxes = document.getElementsByName('check');
    checkboxes.forEach((item) => {
        if ((item as HTMLInputElement).value !== event.target.value) {
        (item as HTMLInputElement).checked = false;
        // event.target.checked == true;

      }
    });
    // console.log("u 1");
    this.pamti = this.items;
    this.filtriraniLetovi.forEach(element => {
      if (element.brStajanja == 1) {
        this.items1.push(element);
      }
    });

    this.items = this.items1.filter(value => this.items.includes(value));

  } else if (event.target.defaultValue == '2+' && event.target.checked == true) {

    this.pamti = this.items;
    const checkboxes = document.getElementsByName('check');
    checkboxes.forEach((item) => {
        if ((item as HTMLInputElement).value !== event.target.value) {
        (item as HTMLInputElement).checked = false;
        // event.target.checked == true;
     }
    });
    this.filtriraniLetovi.forEach(element => {
      if (element.brStajanja >= 2) {
       this.items1.push(element);
      }
    });

    this.items = this.items1.filter(value => this.items.includes(value));

  } else {
   this.items = this.pamti;
  }

  this.letovi = this.items;
  this.items1 = [];
}

onCheckboxChangeKompanija(event: any) {

  this.filtriraniLetovi.forEach(element => {
    if (event.target.checked == true && (event.target.defaultValue == element.kompanijaPolaska || event.target.defaultValue == element.kompanijaPovratka)) {
      console.log('usla u checked');
      // console.log(event.target.defaultValue, this.items, this.items.indexOf(element));
      this.items1.push(element);
      this.pamtiKom = this.items;

    } else if(event.target.checked == false){
      // alert("ELSEE");
      this.items = this.filtriraniLetovi;
      this.items1=this.items;
    }
  });
  console.log("ITEMS", this.items, "ITEMS1", this.items1);
  this.items = this.items1.filter(value => this.items.includes(value));
  console.log("ITEMS", this.items);
  this.letovi = this.items;
  this.items1 = [];
}
ngOnChangesTimeHour(event: any) {
  // this.items = [];
  // if(this.items.length<1) this.items=this.pocetniLetovi;
  // console.log(event.target.value);
  this.filtriraniLetovi.forEach(element => {
    // console.log(+element.trajanje.substr(4, 2));
    if (+element.trajanje.substr(4, 2) <= event.target.value) {
      // console.log('U if');
      this.items1.push(element);
      //this.pamti=this.items;
    }

  });
  this.items=this.items1;
  //this.items = this.items1.filter(value => this.items.includes(value));
  this.letovi = this.items1;
  this.items1 = [];
}
ngOnChangesTimeMinutes(event: any) {
  if (this.letovi.length < 1) { this.letovi=this.pocetniLetovi; }
  this.letovi.forEach(element => {
    if (+element.trajanje.substr(8, 2) <= event.target.value) {
      this.items.push(element);
    }
    this.letovi = this.items;
    this.items = [];
  });

}
ngOnChangeBag(event: any) {
  // console.log("show cijan je ", this.showcijena);
  if (this.items.length >= 1) { this.filtriraniLetovi=this.items; }
  this.filtriraniLetovi.forEach(element => {
    if (event.target.value >= this.showcijena) {
      console.log('event.target.value >= this.showcijena', event.target.value, this.showcijena);
      element.cijena = element.cijena +  20;
      console.log('Cijena je +', element.cijena);
      this.showcijena = event.target.value;
    } else {
      console.log('ELSE funkcija');
      element.cijena = element.cijena -  20;
      console.log('cijena je', element.cijena);
    }
  });
  this.items = this.filtriraniLetovi;
  this.letovi = this.filtriraniLetovi;
}
ngOnDestroy(): void {
 console.log('on destroy');
 //this.letService.vratiLetove = this.letovi;
 this.letService.infoLet = this.infoLet;
 this.letService.aerodromi = this.aerodromi;
 //console.log('Filtrirano', this.letService.vratiLetove);

 }
}
