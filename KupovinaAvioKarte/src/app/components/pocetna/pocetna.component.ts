import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      polaziste: ['', Validators.required],
      odrediste: ['', Validators.required],
      klasa: ['', Validators.required],
      availability:  ['', Validators.required],
      brOsoba:  ['', Validators.required]
    });
  }
  nesto() {}

}
