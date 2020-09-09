import { Component, OnInit, Input } from '@angular/core';
import { Letovi } from '../../models/Letovi';

@Component({
  selector: 'app-ukupno',
  templateUrl: './ukupno.component.html',
  styleUrls: ['./ukupno.component.css']
})
export class UkupnoComponent implements OnInit {

  @Input() public let: Letovi;
  cijena:number=0;
  constructor() { }

  ngOnInit() {
    this.cijena=this.let.cijena*this.let.brojOsoba;
  }

}
