import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewContainerRef } from '@angular/core';
import { Letovi } from 'src/app/models/Letovi';
import { InfoLet } from 'src/app/models/InfoLet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LetService } from 'src/app/services/let.service';
import { Putnik } from 'src/app/models/Putnik';
import { Placanje } from 'src/app/models/Placanje';

@Component({
  selector: 'app-placanje',
  templateUrl: './placanje.component.html',
  styleUrls: ['./placanje.component.css']
})
export class PlacanjeComponent implements OnInit {
  @Input()
  set newdata(putnik: Putnik) {
    console.log("U seteru newdata")
    this._putnik = putnik;
  }
  @Input() public potvrda: string;
 // @Input() public putnik: Putnik;
  private _putnik: Putnik;

  @Input()
  set putnik(putnik: Putnik) {
    console.log("U seteru")
    this._putnik = putnik;
  }
  get putnik(): Putnik { return this._putnik; }

  @Output() public getPlacanje = new EventEmitter<Placanje>();
  form: FormGroup;
  //cijena:number=1;
  putanja:string='';

  suma: number=0;
  vrsta: string="";
  uslovi1: string="false";
  pokazi:boolean=false;
  pokaziplacanje:boolean=false;
  kljucevi: Array<string>=[];
  vrijednosti:Array<string>=[];
  cijeneP:boolean=false;
  placanje:Placanje=new Placanje("", "", "", "", "", "", "", "", "", null);
  constructor(private formBuilder: FormBuilder, private router: Router, private letService: LetService, public viewContainerRef: ViewContainerRef) {
  }
ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  console.log("CHANGEEEE",  this._putnik);
  if(this._putnik) {
    this.pokazi=true;
    console.log("U ifu za provjeru putnika i postvaljanje pokazi");
    if(this._putnik.cijene) {
      console.log("usla u if kada cijene nisu prazne");
      this.cijeneP=true;
      this._putnik.cijene.forEach((value: string, key: string) => {
        if(this.kljucevi.indexOf(key) == -1){
          console.log("Usla u if gdje provjeravam kljuceve i racunam sumu");
          this.suma+=Number(value.substr(0, value.length-2));
          this.kljucevi.push(key);
          this.vrijednosti.push(key+", "+value);
          console.log("Kljucevi",this.kljucevi);

        }
        console.log("Suma je", this.suma);
        /*;
      //this.getPutnik.emit(this.newPutnik);;
      */
   });

  }
  }

  console.log("pkazi je ", this.pokazi);
  console.log("pokazi placanje i potvrda==",this.pokaziplacanje, this.potvrda);
}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      potvrdiemail: ['', Validators.required],
      grad: ['', Validators.required,  Validators.pattern("^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$")],
      pbroj:  ['', Validators.required],
      //brOsoba:  ['', Validators.required],
      adresa: ['', Validators.required, Validators.pattern("\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\.")],
      ime: ['', Validators.required, Validators.pattern("/^[a-z ,.'-]+$/i")],
      prezime: ['', Validators.required, Validators.pattern("/^[a-z ,.'-]+$/i")],
      kbroj: ['', Validators.required,  Validators.pattern("^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$")],
      datumIsteka: ['', Validators.required,  Validators.pattern("/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/")],
      kod: ['', Validators.required,  Validators.pattern("^[0-9]{3, 4}$")],
    });

  }

  dalje(){
    console.log("klik na dalje placanje ");
    this.placanje=new Placanje(this.form.value.ime, this.form.value.prezime, this.form.value.adresa, this.form.value.pbroj,
      this.form.value.grad,this.form.value.kbroj,this.form.value.kod,this.uslovi1 ,this.vrsta, this.form.value.datumIsteka);
      console.log("Info o placanju", this.placanje);
      this.getPlacanje.emit(this.placanje);
      this.letService.placanje=this.placanje;
      console.log("PUTNIK", this._putnik);
  }
  uslovi(){
    if (this.uslovi1="false") this.uslovi1="true";
    else if(this.uslovi1="true") this.uslovi1="false";
  }
  mark(imageId) {
    document.getElementById(imageId).style.border = "2px solid blue";
    if(imageId=="imageId") this.vrsta="VISA";
    if(imageId=="imageId1") this.vrsta="UNIO PAY";
    if(imageId=="imageId2") this.vrsta="VISA";
    if(imageId=="imageId3") this.vrsta="MAESTRO";
    if(imageId=="imageId4") this.vrsta="AMERICAN";
    if(imageId=="imageId5") this.vrsta="MAESTRO";

  }


}
