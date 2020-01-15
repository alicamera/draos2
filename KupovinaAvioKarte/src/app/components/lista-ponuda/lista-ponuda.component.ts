import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-ponuda',
  templateUrl: './lista-ponuda.component.html',
  styleUrls: ['./lista-ponuda.component.css']
})
export class ListaPonudaComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      polaziste: ['', Validators.required],
      odrediste: ['', Validators.required],
      klasa: ['', Validators.required],
      availability:  ['', Validators.required],
      brOsoba:  ['', Validators.required]
    });
  }

}
