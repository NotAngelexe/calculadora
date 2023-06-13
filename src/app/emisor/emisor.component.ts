import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent implements OnInit {
  calcular: FormGroup;

  Brb: boolean = false;
  Brc: boolean = false;
  Bre: boolean = false;

  Bvb: boolean = false;
  Bvc: boolean = false;
  Bve: boolean = false;

  Bib: boolean = false;
  Bic: boolean = false;
  Bie: boolean = false;

  Bvcc: boolean = false;
  Bvce: boolean = false;
  BB: boolean = false;

  rb: number = 0;
  rc: number = 0;
  re: number = 0;

  vb: number = 0;
  vc: number = 0;
  ve: number = 0;

  ib: number = 0;
  ic: number = 0;
  ie: number = 0;

  vcc: number = 0;
  vce: number = 0;
  B: number = 0;
  constructor(private fb: FormBuilder) {
    this.calcular = this.fb.group({
      rb: ['', Validators.required],
      rc: ['', Validators.required],
      re: ['', Validators.required],
      vb: ['', Validators.required],
      vc: ['', Validators.required],
      ve: ['', Validators.required],
      ib: ['', Validators.required],
      ic: ['', Validators.required],
      ie: ['', Validators.required],
      vcc: ['', Validators.required],
      vce: ['', Validators.required],
      B: ['', Validators.required],
    })
  }
  ngOnInit() {
    var noControls = Object.keys(this.calcular.controls).length;
    var controls = Object.keys(this.calcular.controls);
    for (let i = 0; i < noControls; i++) {
      this.calcular.get(controls[i])?.disable();
    }
  }

  resistencias() {
    var v = this.calcular.value;
    if (v.ic != undefined && v.ib != undefined && v.ib != 0 && !this.BB) {
      console.log("b: " + (v.ic / v.ib));
      this.B = v.ic / v.ib;
      this.BB = true;
    }
  }

  desactiva(cual: string) {
    if (this.calcular.get(cual)?.enabled) {
      this.calcular.get(cual)?.disable();
    } else {
      this.calcular.get(cual)?.enable();
    }
  }
}
