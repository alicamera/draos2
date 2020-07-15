import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LetService } from 'src/app/services/let.service';
import { Putnik } from 'src/app/models/Putnik';
import { Placanje } from 'src/app/models/Placanje';

@Component({
  selector: 'app-servis-ponuda',
  templateUrl: './servis-ponuda.component.html',
  styleUrls: ['./servis-ponuda.component.css']
})
export class ServisPonudaComponent implements OnInit {
  @Input() public putnik: Putnik;
  form: FormGroup;
  newPutnik: Putnik;
  ima: boolean=false;
  paket: Map<string, string>=new Map<string, string>();
  @Output() public getPutnik = new EventEmitter<Putnik>();

  constructor(private formBuilder: FormBuilder, private router: Router, private letService: LetService) {

  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      zastita: ['', Validators.required],
      putno: ['', Validators.required],
      prtljag: ['', Validators.required],
      kasnjenje:  ['', Validators.required],
      //brOsoba:  ['', Validators.required],
      rezervacija: ['', Validators.required],
      plan: ['', Validators.required],
      prezime: ['', Validators.required],
      mr: ['', Validators.required],
      mrs: ['', Validators.required],
      DA: ['', Validators.required],
    });
  }

  osnovni(){
    if(this.ima==false){
      this.paket.set("Osnovni paket podrške", "0 KM");
      this.ima=true;
    }
    /*else{
      this.ima=false;
      this.paket=new Map<string, string>();;
    }*/

  }
  premium(){
    if(this.ima==false){
      this.paket.set("Premium paket podrške", "30 KM");
      this.ima=true;
    }
    }
  platinum(){
    if(this.ima==false){
      this.paket.set("Platinum paket podrške", "50 KM");
      this.ima=true;
    }
    }


zastita(event:any) {
  if(this.paket.has("Zaštita od otkazivanja")==false)
  this.paket.set("Zaštita od otkazivanja", "22 KM");
  console.log(this.paket);
  }
  zastitaNE(event:any) {
    this.paket.delete("Zaštita od otkazivanja");
    console.log(this.paket);
    }


putno(event:any) {
  if(this.paket.has("Putno osiguranje")==false)
  this.paket.set("Putno osiguranje", "79 KM");
  console.log(this.paket);
  }
  putnoNE(event:any) {
    this.paket.delete("Putno osiguranje");
    console.log(this.paket);
    }


prtljag(event:any) {
  if(this.paket.has("Zaštita prtljaga")==false)
  this.paket.set("Zaštita prtljaga", "22 KM");
  console.log(this.paket);
  }
  prtljagNE(event:any) {
    this.paket.delete("Zaštita prtljaga");
    console.log(this.paket);
    }

kasnjenje(event:any) {
  if(this.paket.has("Kompenzacija za kašnjenje leta")==false)
  this.paket.set("Kompenzacija za kašnjenje leta", "32 KM");
  console.log(this.paket);
  }
  kasnjenjeNE(event:any) {
    this.paket.delete("Kompenzacija za kašnjenje leta");
    console.log(this.paket);
    }

rezervacija(event:any) {
  if(this.paket.has("Referenca za rezervaciju putem SMS-a")==false)
  this.paket.set("Referenca za rezervaciju putem SMS-a", "22 KM");
  console.log(this.paket);
  }
  rezervacijaNE(event:any) {
    this.paket.delete("Referenca za rezervaciju putem SMS-a");
    console.log(this.paket);
    }
    plan(event:any) {
      if(this.paket.has("Mobilni putni plan")==false)
      this.paket.set("Mobilni putni plan", "22 KM");
      console.log(this.paket);
      }
      planNE(event:any) {
        this.paket.delete("Mobilni putni plan");
        console.log(this.paket);
        }

  servis(){
    this.paket.forEach((value: string, key: string) => {
     this.putnik.cijene.set(key, value);
     //this.getPutnik.emit(this.newPutnik);
  });
  this.newPutnik=new Putnik(this.putnik.email, this.putnik.potvrdiEmail, this.putnik.drzava, this.putnik.broj, this.putnik.saglasnost,
    this.putnik.ime, this.putnik.prezime, this.putnik.mr, this.putnik.mrs, this.putnik.prijavaPrtljaga,
    this.putnik.izguljenPrtljag, this.putnik.jelo, this.putnik.fleksibilnaKarta, this.putnik.cijene);
    this.getPutnik.emit(this.newPutnik);
  //this.letService.putnik.cijene=this.putnik.cijene;
  }

}
