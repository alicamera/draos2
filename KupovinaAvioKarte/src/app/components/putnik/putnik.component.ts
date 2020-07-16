import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LetService } from 'src/app/services/let.service';
import { Putnik } from 'src/app/models/Putnik';

@Component({
  selector: 'app-putnik',
  templateUrl: './putnik.component.html',
  styleUrls: ['./putnik.component.css']
})
export class PutnikComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private letService: LetService) { }
  dugme:boolean=true;
  secondFormGroup: FormGroup;
  putnik1:Putnik;
  @Output() public getUserData = new EventEmitter<Putnik>();
  searchText: string;

  cijene : Map<string,string> = new Map<string, string>();

  ngOnInit() {
    this.secondFormGroup = this.formBuilder.group({
      email: ['',Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")])],
      potvrdiemail: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")])],
      drzava: ['', Validators.required],
      broj:  ['',Validators.compose([ Validators.required, Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")])],
      //brOsoba:  ['', Validators.required],
      saglasnost: [''],
      ime: ['', Validators.compose([Validators.required])],
      prezime: ['',  Validators.compose([Validators.required])], //, Validators.pattern("^[a-z ,.'-]+$")
      mr: ['', Validators.required],
      //mrs: ['', Validators.required],
      prijava: ['', Validators.required],
      izgubljen: ['', Validators.required],
      jelo: [''],
      karta: ['', Validators.required],
    });
    /*
    this.putnik=new Putnik(this.form.value.email, this.form.value.potvrdiemail, this.form.value.drzava,
      this.form.value.broj, this.form.value.saglasnost, this.form.value.ime, this.form.value.prezime, this.form.value.mr, this.form.value.mrs,this.form.value.DA);
      console.log("podaci o putniku", this.putnik);
      */
    }

/*

  let info = new InfoLet(this.form.value.dvosmjerna, this.form.value.polaziste,
    this.form.value.odrediste, this.form.value.datumpolaska, this.form.value.datumpovratka,
    this.form.value.klasa, this.form.value.samoDirektni); // this.form.value.brOsoba,
*/
prijava(event:any) {
  if(this.cijene.has("Prijava prtljaga")==false)
    this.cijene.set("Prijava prtljaga", "23 KM");
console.log(this.cijene);
}
prijavaNE(event:any) {
this.cijene.delete("Prijava prtljaga");
console.log(this.cijene);
}

izgubljeno(event:any) {
  if(this.cijene.has("Usluga izgubljenog prtljaga")==false)
    this.cijene.set("Usluga izgubljenog prtljaga", "35 KM");
  console.log(this.cijene);
}
izgubljenoNE(event:any) {
  this.cijene.delete("Usluga izgubljenog prtljaga");
  console.log(this.cijene);
}
fleksibilna(event:any) {
if(this.cijene.has("Fleksibilna karta")==false)
 this.cijene.set("Fleksibilna karta", "25 KM");
 console.log(this.cijene);

}
fleksibilnaNE(event:any) {
  this.cijene.delete("Fleksibilna karta");
  console.log(this.cijene);
}

putnik(){
  console.log("klik na dalje podaci o putniku ");
  this.putnik1=new Putnik(this.secondFormGroup.value.email, this.secondFormGroup.value.potvrdiemail, this.secondFormGroup.value.drzava,this.secondFormGroup.value.broj,
    this.secondFormGroup.value.saglasnost, this.secondFormGroup.value.ime,
     this.secondFormGroup.value.prezime, this.secondFormGroup.value.mr, this.secondFormGroup.value.mrs,this.secondFormGroup.value.prijava,
     this.secondFormGroup.value.izgubljen, this.secondFormGroup.value.jelo,this.secondFormGroup.value.karta, this.cijene );
    console.log("podaci o putniku", this.putnik1);
    this.getUserData.emit(this.putnik1);
    //this.letService.putnik=this.putnik1;
}
pom(){
  console.log("jeli validana", this.secondFormGroup.valid)
}
potvrdaEmaila($event){
  if(this.secondFormGroup.value.email != this.secondFormGroup.value.potvrdiemail) {
    this.secondFormGroup.errors;
  }
}
}
