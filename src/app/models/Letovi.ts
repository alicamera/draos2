import { DecimalPipe } from "@angular/common";

export class Letovi {
  dvosmjerna: boolean;
  jednosmjerna: boolean;
  polaziste: string;
  odrediste: string;
  datumPolaska: Date;
  datumPovratka: Date;
  klasa: string;
  brojOsoba: number;
  samoDirektni: boolean;
  cijena: number;
  aerodromPolaska: string;
  aerodromDolaska: string;
  trajanje: string;
  brStajanja: number;
  kompanijaPolaska: string;
  kompanijaPovratka: string;
  vrijemePolaska: string;
  vrijemeDolaska: string;
  vrijemePolaska2: string;
  vrijemeDolaska2: string;
  slikaPolaska: string;
  slikaDolaska: string;
  constructor (dvosmjerna: boolean, polaziste: string, slikaPolaska: string, odrediste: string, slikaDolaska: string, datumPolaska: Date,
    datumPovratka: Date, klasa: string, cijena: number, aerodromPolaska: string,
    aerodromDolaska: string, trajanje: string, brStajanja: number,
    kompanijaPolaska: string, kompanijaPovratka: string,
    vrijemePolaska: string,vrijemeDolaska: string,
    vrijemePolaska2: string,vrijemeDolaska2: string) {
      this.dvosmjerna=dvosmjerna;
      this.polaziste=polaziste;
      this.slikaPolaska=slikaPolaska;
      this.odrediste=odrediste;
      this.slikaDolaska=slikaDolaska;
      this.datumPolaska=datumPolaska;
      this.datumPovratka=datumPovratka;
      this.klasa=klasa;
      this.cijena=cijena;
      this.aerodromPolaska=aerodromPolaska;
      this.aerodromDolaska=aerodromDolaska;
      this.trajanje=trajanje;
      this.brStajanja=brStajanja;
      this.kompanijaPolaska=kompanijaPolaska;
      this.kompanijaPovratka=kompanijaPovratka;
      this.vrijemePolaska=vrijemePolaska;
      this.vrijemeDolaska=vrijemeDolaska;
      this.vrijemePolaska2=vrijemePolaska2;
      this.vrijemeDolaska2=vrijemeDolaska2;

    }
}
