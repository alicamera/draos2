export class Putnik {
  email: string;
  potvrdiEmail: string;
  drzava: string;
  broj: string;
  saglasnost: string;
  ime: string;
  prezime: string;
  mr: string;
  mrs: string;
  prijavaPrtljaga: string;
  izguljenPrtljag: string;
  jelo: string;
  fleksibilnaKarta:string;
  cijene: Map<string, string>;

  constructor (email: string,
    potvrdiEmail: string,
    drzava: string,
    broj: string,
    saglasnost: string,
    ime: string,
    prezime: string,
    mr: string,
    mrs: string,
    prijavaPrtljaga: string,
    izguljenPrtljag: string,
    jelo: string,
    fleksibilnaKarta:string,
    cijene: Map<string, string>) {
      this.email= email;
      this.potvrdiEmail= potvrdiEmail;
      this.drzava= drzava;
      this.broj= broj;
      this.saglasnost= saglasnost;
      this.ime= ime;
      this.prezime= prezime;
      this.mr= mr;
      this.mrs= mrs;
      this.prijavaPrtljaga= prijavaPrtljaga;
      this.izguljenPrtljag=izguljenPrtljag;
      this.jelo=jelo;
      this.fleksibilnaKarta=fleksibilnaKarta;
      this.cijene=cijene;
    }
}
