import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent {
  calcular: FormGroup;
  constructor(private fb: FormBuilder) {
    this.calcular = this.fb.group({
      rb: [''],
      rc: [''],
      re: [''],
    })
  }

  resistencias() {
    console.log(this.calcular);
  }
}
