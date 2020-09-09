import { Component, OnInit, Input } from '@angular/core';
import { Letovi } from '../../models/Letovi';
import { InfoLet } from '../../models/InfoLet';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LetService } from 'src/app/services/let.service';

@Component({
  selector: 'app-kartica-ponuda',
  templateUrl: './kartica-ponuda.component.html',
  styleUrls: ['./kartica-ponuda.component.css']
})
export class KarticaPonudaComponent implements OnInit {

  @Input() public let: Letovi;
  @Input() public infoLet: InfoLet;
  @Input() public placanje: string;
  //cijena:number=1;
  putanja:string='';
  constructor(private formBuilder: FormBuilder, private router: Router, private letService: LetService) { }

  ngOnInit() {
    //console.log(this.infoLet.brojOsoba);
    //this.cijena=this.let.cijena*this.infoLet.brojOsoba;
    this.putanja= this.router.url;
    console.log(this.router.relativeLinkResolution);

  }
  trazi(event:any){
    /*  const infoLet = new InfoLet(this.form.value.dvosmjerna, this.form.value.polaziste,
      this.form.value.odrediste, this.form.value.datumpolaska, this.form.value.datumpovratka,
       this.form.value.samoDirektni); //this.form.value.klasa, this.form.value.brOsoba,
      console.log(infoLet);
      this.vratiLetove=this.letService.getLet(infoLet);
      console.log("vratila se iz servisa");
      console.log(this.vratiLetove);
      */
     console.log("event na trazi", event)
    let vrati=[];
    vrati.push(event);
    //console.log("LEt u kartici ponuda", vrati);

    this.letService.vratiLetove=vrati;

     this.router.navigate(['/ponuda']);
  }

}
