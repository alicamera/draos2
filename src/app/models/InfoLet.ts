export class InfoLet {
  dvosmjerna: boolean;
  jednosmjerna: boolean;
  polaziste: string;
  odrediste: string;
  datumPolaska: Date;
  datumPovratka: Date;
  klasa: string;
  brojOsoba: number;
  samoDirektni: boolean;
  //saPresjedanjem: boolean;
  //sveVrste: boolean;
  constructor (dvosmjerna: boolean, polaziste: string,odrediste: string,datumPolaska: Date,
    datumPovratka: Date,klasa: string, samoDirektni: boolean) { //klasa: string,brojOsoba: number ,
      this.dvosmjerna=dvosmjerna;
      this.polaziste=polaziste;
      this.odrediste=odrediste;
      this.datumPolaska=datumPolaska;
      this.datumPovratka=datumPovratka;
      this.klasa=klasa;
      //this.brojOsoba=brojOsoba;
      this.samoDirektni=samoDirektni;
    }
}
