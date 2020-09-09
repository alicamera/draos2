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
    const let1 = new Letovi(true, 'Sarajevo','../../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-07-08'), new Date('2020-07-09'),'Ekonomska', 540, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    // console.log("datum polaska prvog",let1.datumPolaska.toDateString());
    this.letovi.push(let1);

    // tslint:disable-next-line: max-line-length
    let let11 = new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-07-08'), new Date('2020-07-09'),'Ekonomska', 200, 'SJJ', 'FXL', '00d 07h 20min', 4, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '11:30', '15:20');
    this.letovi.push(let11);

    // tslint:disable-next-line: max-line-length
    const let2 = new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-03-1'), new Date('2020-03-10'),'Ekonomska', 540, 'SJJ', 'FXL', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '10:30', '15:20');
    this.letovi.push(let2);

    // tslint:disable-next-line: max-line-length
    const let3 = new Letovi(true, 'Sarajevo','./../../assets/index1.png', 'Berlin','../../../assets/index.png', new Date('2020-03-20'), new Date('2020-03-30'),'Ekonomska', 490, 'SJJ', 'FXL', '00d 02h 20min', 0, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '10:30', '15:20');
    this.letovi.push(let3);

    // tslint:disable-next-line: max-line-length
    const let4 = new Letovi(true, 'Sarajevo','./../../assets/index1.png','Berlin','../../../assets/index.png', new Date('2020-04-1'), new Date('2020-04-10'),'Ekonomska', 490, 'SJJ', 'SXF', '00d 03h 20min', 1, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '10:30', '15:20');
    this.letovi.push(let4);

    // tslint:disable-next-line: max-line-length
    const let5 = new Letovi(true, 'Sarajevo','./../../assets/index1.png','Berlin','../../../assets/index.png', new Date('2020-04-20'), new Date('2020-04-30'),'Ekonomska', 140, 'SJJ', 'FXL' , '00d 05h 20min', 2, 'Austrian airlines', 'Lufthansa', '10:30', '15:20', '10:30', '15:20');
    this.letovi.push(let5);
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
