import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent implements OnInit {
  calcular: FormGroup;

  total: number = 0;

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
    this.total = 0;

    this.Brb = false;
    this.Brc = false;
    this.Bre = false;
    this.Bvb = false;
    this.Bvc = false;
    this.Bve = false;
    this.Bib = false;
    this.Bic = false;
    this.Bie = false;
    this.Bvcc = false;
    this.Bvce = false;
    this.BB = false;
    var v = this.calcular.value;
    this.total = Object.keys(v).length;
    console.log(this.calcular.value)

    if (v.rb != undefined) {
      this.Brb = true;
      this.rb = v.rb;
    }
    if (v.rc != undefined) {
      this.Brc = true;
      this.rc = v.rc;
    }
    if (v.re != undefined) {
      this.Bre = true;
      this.re = v.re;
    }


    if (v.vb != undefined) {
      this.Bvb = true;
      this.vb = v.vb;
    }
    if (v.vc != undefined) {
      this.Bvc = true;
      this.vc = v.vc;
    }
    if (v.ve != undefined) {
      this.Bve = true;
      this.ve = v.ve;
    }


    if (v.ib != undefined) {
      this.Bib = true;
      this.ib = v.ib;
    }
    if (v.ic != undefined) {
      this.Bic = true;
      this.ic = v.ic;
    }
    if (v.ie != undefined) {
      this.Bie = true;
      this.ie = v.ie;
    }


    if (v.vcc != undefined) {
      this.Bvcc = true;
      this.vcc = v.vcc;
    }
    if (v.vce != undefined) {
      this.Bvce = true;
      this.vce = v.vce;
    }
    if (v.B != undefined) {
      this.BB = true;
      this.B = v.B;
    }

    this.recursiva(1);

    console.log("fin: " + this.total);

    console.log("ib: " + this.ib);
    console.log("ic: " + this.ic);
    console.log("ie: " + this.ie);

    console.log("vb: " + this.vb);
    console.log("vc: " + this.vc);
    console.log("ve: " + this.ve);

    console.log("rb: " + this.rb);
    console.log("rc: " + this.rc);
    console.log("re: " + this.re);

    console.log("vcc: " + this.vcc);
    console.log("vce: " + this.vce);
    console.log("B: " + this.B);
  }

  recursiva(cont: number) {
    cont++;
    // 1 B
    if (!this.BB) {
      if (this.Bic && this.Bib && this.ib != 0) {
        this.B = this.ic / this.ib;
        this.BB = true;
        this.total++;
      } else if (this.Bie && this.Bib && this.ib != 0) {
        this.B = (this.ie / this.ib) - 1;
        this.BB = true;
        this.total++;
      }
    }
    // 2 corriente ib
    if (!this.Bib) {
      if (this.Bic && this.BB && this.B != 0) {
        this.ib = this.ic / this.B;
        this.Bib = true;
        this.total++;
      } else if (this.Bvb && this.Brb && this.rb != 0) {
        this.ib = this.vb / this.rb;
        this.Bib = true;
        this.total++;
      } else if (this.Bie && this.BB) {
        this.ib = this.ie / (this.B + 1);
        this.Bib = true;
        this.total++;
      } else if (this.Bvcc && this.Brb && this.BB && this.Bre) {
        this.ib = (this.vcc - 0.7) / (this.rb + ((this.B + 1) * this.re));
        this.Bib = true;
        this.total++;
      }
    }
    // 3 corriente ic
    if (!this.Bic) {
      if (this.Bib && this.BB) {
        this.ic = this.B * this.ib;
        this.Bic = true;
        this.total++;
      } else if (this.Bvc && this.Brc && this.rc != 0) {
        this.ic = this.vc / this.rc;
        this.Bic = true;
        this.total++;
      }
    }
    // 4 corriente ie
    if (!this.Bie) {
      if (this.Bib && this.Bic) {
        this.ie = this.ib + this.ic;
        this.Bie = true;
        this.total++;
      } else if (this.Bve && this.Bre && this.re != 0) {
        this.ie = this.ve / this.re;
        this.Bie = true;
        this.total++;
      } else if (this.BB && this.Bib) {
        this.ie = this.ib * (this.B + 1);
        this.Bie = true;
        this.total++;
      }
    }
    // 5 voltaje vce
    if (!this.Bvce) {
      if (this.Bvc && this.Bve) {
        this.vce = this.vc - this.ve;
        this.Bvce = true;
        this.total++;
      } else if (this.Bvcc && this.Bic && this.Brc && this.Bre) {
        this.vce = this.vcc - this.ic * (this.rc + this.re);
        this.Bvce = true;
        this.total++;
      }
    }
    // 6 voltaje vb
    if (!this.Bvb) {
      if (this.Bvcc && this.Bib && this.Brb) {
        this.vb = this.vcc - (this.ib * this.rb);
        this.Bvb = true;
        this.total++;
      } else if (this.Bve) {
        this.vb = 0.7 + this.ve;
        this.Bvb = true;
        this.total++;
      }
    }
    // 7 voltaje vc
    if (!this.Bvc) {
      if (this.Bvcc && this.Brc && this.Bic) {
        this.vc = this.vcc - (this.rc * this.ic);
        this.Bvc = true;
        this.total++;
      } else if (this.Bve && this.Bvce) {
        this.vc = this.ve + this.vce;
        this.Bve = true;
        this.total++;
      }
    }
    // 8 voltaje ve
    if (!this.Bve) {
      if (this.Bvb) {
        this.ve = this.vb - 0.7;
        this.Bve = true;
        this.total++;
      } else if (this.Bvce && this.Bvc) {
        this.ve = this.vc - this.vce;
        this.Bve = true;
        this.total++;
      }
    }
    // 9 voltaje vcc
    if (!this.Bvcc) {
      if (this.Bvc && this.Bvce && this.Bve) {
        this.vcc = this.vc + this.vce + this.ve;
        this.Bvcc = true;
        this.total++;
      } else if (this.Bvb && this.Brb && this.Bib) {
        this.vcc = this.rb * this.ib + this.vb;
        this.Bvcc = true;
        this.total++;
      } else if (this.Bvc && this.Brc && this.Bic) {
        this.vcc = this.rc * this.ic + this.vc;
        this.Bvcc = true;
        this.total++;
      } else if (this.Bvce && this.Bic && this.Brc && this.Bre) {
        this.vcc = this.vce + this.ic * (this.rc + this.re);
        this.Bvcc = true;
        this.total++;
      }
    }
    // 10 resistencia rb
    if (!this.Brb) {
      if (this.Bvcc && this.Bvb) {
        this.rb = (this.vcc - this.vb) / this.ib;
        this.Brb = true;
        this.total++;
      }
    }
    // 11 resistencia rc
    if (!this.Brc) {
      if (this.Bvcc && this.Bvc && this.Bic) {
        this.rc = (this.vcc - this.vc) / this.ic;
        this.Brc = true;
        this.total++;
      } else if (this.Bvcc && this.Bvce && this.Bic && this.Bre) {
        this.rc = ((this.vcc - this.vce) / this.ic) - this.re;
        this.Brc = true;
        this.total++;
      }
    }
    // 12 resistencia re
    if (!this.Bre) {
      if (this.Bve && this.Bie && this.ie != 0) {
        this.re = this.ve / this.ie;
        this.Bre = true;
        this.total++;
      } else if (this.Bvcc && this.Bvce && this.Bic && this.Brc) {
        this.re = ((this.vcc - this.vce) / this.ic) - this.rc;
        this.Bre = true;
        this.total++;
      }
    }

    if (this.total < 12)
      this.recursiva(cont);
  }

  desactiva(cual: string) {
    if (this.calcular.get(cual)?.enabled) {
      this.calcular.get(cual)?.disable();
    } else {
      this.calcular.get(cual)?.enable();
    }
  }
}
