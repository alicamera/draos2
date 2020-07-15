import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Letovi } from 'src/app/models/Letovi';
import { InfoLet } from 'src/app/models/InfoLet';
import { LetService } from 'src/app/services/let.service';
import { Putnik } from 'src/app/models/Putnik';
import { Placanje } from 'src/app/models/Placanje';
import { PlacanjeComponent } from '../placanje/placanje.component';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit {

  pokaziplacanje: boolean=false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    isEditable = false;
    letovi: Array<Letovi>=[];
    infoLet: InfoLet;
    putnik1: Putnik;
    placanje: Placanje;

    constructor(private _formBuilder: FormBuilder, private letService: LetService) {
      this.infoLet=this.letService.infoLet;
      this.letovi=this.letService.vratiLetove;
    }

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        //firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({

      });

/*
    //this.infoLet=this.letService.getInfoLet();
    this.infoLet=new InfoLet(true, "Sarajevo","Berlin", new Date("2020-02-19"), new Date("2020-02-20"),"Ekonomska",true);// 2,
    console.log("Let info", this.infoLet);
    //this.letovi=this.letService.getVraceneLetove();
    let let1 = new Letovi(true, "Sarajevo","./../../assets/index1.png","Berlin","../../../assets/index.png", new Date("2020-02-19"), new Date("2020-02-20"),"Ekonomska", 540, "SJJ", "FXL", "00d 03h 20min", 1, "Austrian airlines", "Lufthansa", "10:30", "15:20", "10:30", "15:20");
    //console.log("datum polaska prvog",let1.datumPolaska.toDateString());

      let let11 = new Letovi(true, "Sarajevo","./../../assets/index1.png","Berlin","../../../assets/index.png", new Date("2020-02-19"), new Date("2020-02-20"),"Ekonomska", 200, "SJJ", "SXF", "00d 07h 20min", 4, "Austrian airlines", "Lufthansa", "10:30", "15:20", "10:30", "15:20");
      this.letovi.push(let11);
*/

      console.log("LEtovi u jednoj ponudi", this.letovi);
    }
  public getUserData(value): void {
      console.log("Putnik u ponudi iz putnika", value); // welcome to stackoverflow!
      this.putnik1=value;
  }
  public getPutnik(value): void {
    console.log("Putnik u ponudi iz servisa", value); // welcome to stackoverflow!
    this.putnik1=value;
}
getPlacanje(value): void {
  console.log("Placanje u ponudi iz placanja", value); // welcome to stackoverflow!
  this.placanje=value;
  this.pokaziplacanje=true;
}

}
