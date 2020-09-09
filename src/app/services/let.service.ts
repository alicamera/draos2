import { Injectable } from '@angular/core';
import { InfoLet } from '../models/InfoLet';
import { Letovi } from '../models/Letovi';
import { Observable } from 'rxjs';
import { Putnik } from '../models/Putnik';
import { Placanje } from '../models/Placanje';

@Injectable({
  providedIn: 'root'
})

export class LetService {
 letovi: Array<Letovi> =[];
 vratiLetove: Array<Letovi>  =[];
 infoLet: InfoLet;
 aerodromi: Array<string> =[];
 vrati: Array<Letovi> ;
putnik: Putnik;
placanje: Placanje;
constructor() {
    // tslint:disable-next-line: max-line-length
    //1. linija Sarajevo-Berlin, polazak ponedeljak, povratak petkom, cijene:540, 200, klasa Ekonomska i prva
    const let1 = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-09-14'), new Date('2020-09-18'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let1);
    let let11= new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-09-14'), new Date('2020-09-18'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let11);
    let let1prva= new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-09-14'), new Date('2020-09-18'),'Prva', 880, 'SJJ', 'FXL', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let1prva);

    const let12 = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-09-21'), new Date('2020-09-25'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let12);
    let let13= new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-09-21'), new Date('2020-09-25'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let13);
    let let13prva= new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-09-21'), new Date('2020-09-25'),'Prva', 880, 'SJJ', 'FXL', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let13prva);

    const let14 = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-09-28'), new Date('2020-10-02'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let14);
    let let15= new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-09-28'), new Date('2020-10-02'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let15);
    let let15prva= new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-09-28'), new Date('2020-10-02'),'Prva', 880, 'SJJ', 'FXL', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let15prva);

    const let16 = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-10-05'), new Date('2020-10-09'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let16);
    let let17= new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-10-05'), new Date('2020-10-09'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let17);

    const let18 = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-10-12'), new Date('2020-10-16'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let18);
    let let19= new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-10-12'), new Date('2020-10-16'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let19);
    const let16prva = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-10-05'), new Date('2020-10-09'),'Prva', 880, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let16prva);

    const let110 = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-10-19'), new Date('2020-10-23'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let110);
    let let111= new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-10-19'), new Date('2020-10-23'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let111);
    const let110prva = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-10-19'), new Date('2020-10-23'),'Prva', 880, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let110prva);

    const let112 = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-10-26'), new Date('2020-10-30'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let112);
    let let113= new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-10-26'), new Date('2020-10-30'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let113);
    const let112prva = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-10-26'), new Date('2020-10-30'),'Prva', 880, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let112prva);

    //2. linija Sarajevo-Istanbul, svaki utorak i petak
    const let2 = new Letovi(true, 'Sarajevo','../../../assets/turkish.png', 'Istanbul','../../../assets/turkish.png', new Date('2020-09-15'), new Date('2020-09-18'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Turkish airlines', 'Turkish airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let2);
    let let21= new Letovi(true, 'Sarajevo','./../../assets/turkish.png', 'Istanbul','../../../assets/turkish.png', new Date('2020-09-15'), new Date('2020-09-18'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Turkish airlines', 'Turkish airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let21);
    const let2prva = new Letovi(true, 'Sarajevo','../../../assets/turkish.png', 'Istanbul','../../../assets/turkish.png', new Date('2020-09-15'), new Date('2020-09-18'),'Prva', 880, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Turkish airlines', 'Turkish airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let2prva);

    const let22 = new Letovi(true, 'Sarajevo','../../../assets/turkish.png', 'Istanbul','../../../assets/turkish.png', new Date('2020-09-22'), new Date('2020-09-25'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Turkish airlines', 'Turkish airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let22);
    let let23= new Letovi(true, 'Sarajevo','./../../assets/turkish.png', 'Istanbul','../../../assets/turkish.png', new Date('2020-09-22'), new Date('2020-09-25'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Turkish airlines', 'Turkish airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let23);
    const let23prva = new Letovi(true, 'Sarajevo','../../../assets/turkish.png', 'Istanbul','../../../assets/turkish.png', new Date('2020-09-22'), new Date('2020-09-25'),'Prva', 880, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Turkish airlines', 'Turkish airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let23prva);

    const let24 = new Letovi(true, 'Sarajevo','../../../assets/turkish.png', 'Istanbul','../../../assets/turkish.png', new Date('2020-09-29'), new Date('2020-10-02'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Turkish airlines', 'Turkish airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let24);
    let let25= new Letovi(true, 'Sarajevo','./../../assets/turkish.png', 'Istanbul','../../../assets/turkish.png', new Date('2020-09-29'), new Date('2020-10-02'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Turkish airlines', 'Turkish airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let25);
    const let24prva = new Letovi(true, 'Sarajevo','../../../assets/turkish.png', 'Istanbul','../../../assets/turkish.png', new Date('2020-09-29'), new Date('2020-10-02'),'Prva', 880, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Turkish airlines', 'Turkish airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let24prva);

    const let251 = new Letovi(true, 'Sarajevo','../../../assets/turkish.png', 'Istanbul','../../../assets/turkish.png', new Date('2020-10-06'), new Date('2020-10-09'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Turkish airlines', 'Turkish airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let251);
    let let26= new Letovi(true, 'Sarajevo','./../../assets/turkish.png', 'Istanbul','../../../assets/turkish.png', new Date('2020-10-06'), new Date('2020-10-09'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Turkish airlines', 'Turkish airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let26);
    const let26prva = new Letovi(true, 'Sarajevo','../../../assets/turkish.png', 'Istanbul','../../../assets/turkish.png', new Date('2020-10-06'), new Date('2020-10-09'),'Prva', 880, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Turkish airlines', 'Turkish airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let26prva);

    //3. linija Sarajevo-Bec, srijeda, subota
    const let3 = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Beč','../../../assets/index1.png', new Date('2020-09-16'), new Date('2020-09-19'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Austrian airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let3);
    let let31= new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Beč','../../../assets/index1.png', new Date('2020-09-16'), new Date('2020-09-19'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Austrian airlines', 'Austrian airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let31);
    const let3prva = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Beč','../../../assets/index1.png', new Date('2020-09-16'), new Date('2020-09-19'),'Prva', 880, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Austrian airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let3prva);

    const let32 = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Beč','../../../assets/index1.png', new Date('2020-09-23'), new Date('2020-09-26'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Austrian airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let32);
    let let33= new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Beč','../../../assets/index1.png', new Date('2020-09-23'), new Date('2020-09-26'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Austrian airlines', 'Austrian airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let33);
    const let32prva = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Beč','../../../assets/index1.png', new Date('2020-09-23'), new Date('2020-09-26'),'Prva', 880, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Austrian airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let32prva);


    //4. linija Sarajevo-Zagreb, svaki srijeda i subota
    const let4 = new Letovi(true, 'Sarajevo','../../../assets/index.png', 'Zagreb','../../../assets/index1.png', new Date('2020-09-16'), new Date('2020-09-19'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Lufthansa', 'Austrian airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let4);
    let let41= new Letovi(true, 'Sarajevo','./../../assets/index.png', 'Zagreb','../../../assets/index1.png', new Date('2020-09-16'), new Date('2020-09-19'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Lufthansa', 'Austrian airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let41);
    const let4prva = new Letovi(true, 'Sarajevo','../../../assets/index.png', 'Zagreb','../../../assets/index1.png', new Date('2020-09-16'), new Date('2020-09-19'),'Prva', 880, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Lufthansa', 'Austrian airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let4prva);

    const let42 = new Letovi(true, 'Sarajevo','../../../assets/index.png', 'Zagreb','../../../assets/index1.png', new Date('2020-09-23'), new Date('2020-09-26'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Lufthansa', 'Austrian airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let42);
    let let43= new Letovi(true, 'Sarajevo','./../../assets/index.png', 'Zagreb','../../../assets/index1.png', new Date('2020-09-23'), new Date('2020-09-26'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Lufthansa', 'Austrian airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let43);
    const let41prva = new Letovi(true, 'Sarajevo','../../../assets/index.png', 'Zagreb','../../../assets/index1.png', new Date('2020-09-23'), new Date('2020-09-26'),'Prva', 880, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Lufthansa', 'Austrian airlines', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let41prva);

    //5. linija Sarajevo-Beograd, svaki cetvrtak i utorak

    //6. linija Sarajevo-Minhen, svaki utorak i petak




    this.vratiLetove =[];
  }
  async getLet(letinfo: InfoLet) {
    this.infoLet = letinfo;

    this.letovi.forEach(element => {
      this.aerodromi.indexOf(element.aerodromDolaska) === -1 ? this.aerodromi.push(element.aerodromDolaska) : {};
      this.aerodromi.indexOf(element.aerodromPolaska) === -1 ? this.aerodromi.push(element.aerodromPolaska) : {};
      console.log("Datum iz info leta", letinfo.datumPolaska);
      // tslint:disable-next-line: max-line-length
      if (letinfo.polaziste == element.polaziste && letinfo.odrediste == element.odrediste && letinfo.datumPolaska.toDateString() == element.datumPolaska.toDateString() &&
        letinfo.datumPovratka.toDateString() == element.datumPovratka.toDateString() && letinfo.klasa == element.klasa) {
           this.vratiLetove.push(element);
           console.log('imamo podudaranje');
        }
    });
    return this.vratiLetove;
}

 getVraceneLetove() {
  return this.vratiLetove;
}
 getInfoLet() {
  return this.infoLet;
}
 getAerodrmi() {
  return this.aerodromi;
}
}
