import { Component } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent {
  calcular: FormGroup;
  constructor(private fb: FormBuilder) {
    this.calcular = this.fb.group({
      rb: ['', Validators.required],
      rc: ['', Validators.required],
      re: ['', Validators.required],
      vcc: ['', Validators.required],
      B: ['', Validators.required],
    })
  }

  resistencias() {
    console.log(this.calcular);
  }
  desactivaVcc() {
    if (this.calcular.get('vcc')?.enabled) {
      this.calcular.get('vcc')?.disable();
    } else {
      this.calcular.get('vcc')?.enable();
    }
  }
  desactivaB() {
    if (this.calcular.get('B')?.enabled) {
      this.calcular.get('B')?.disable();
    } else {
      this.calcular.get('B')?.enable();
    }
  }
}
