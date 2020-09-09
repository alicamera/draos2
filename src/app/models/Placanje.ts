export class Placanje {
  ime: string;
  prezime: string;
  adresa: string;
  pbroj: string;
  grad: string;
  brojkartice: string;
  Cvv: string;
  uslovi: string;
  vrsta: string;
  datumIsteka:Date;
  //saPresjedanjem: boolean;
  //sveVrste: boolean;
  constructor ( ime: string,
    prezime: string,
    adresa: string,
    pbroj: string,
    grad: string,
    brojkartice: string,
    Cvv: string,
    uslovi: string,
    vrsta: string,
    datumIsteka:Date) { //klasa: string,brojOsoba: number ,
      this.ime= ime;
      this.prezime= prezime;
      this.adresa= adresa;
      this.pbroj= pbroj;
      this.grad= grad;
      this.brojkartice= brojkartice;
      this.Cvv = Cvv;
      this.uslovi=uslovi;
      this.vrsta= vrsta;
      this.datumIsteka= datumIsteka;
    }

}
