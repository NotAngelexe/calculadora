import { Component } from '@angular/core';
@Component({
  selector: 'app-div-volt',
  templateUrl: './div-volt.component.html',
  styleUrls: ['./div-volt.component.css']
})
export class DivVoltComponent {
  r1: number = 0;
  r2: number = 0;
  rc: number = 0;
  re: number = 0;
  vcc: number = 0;
  calculado = false;
  transistores: [
    {
      nombre: string,
      beta: number,
      imagen: string
    },
    {
      nombre: string,
      beta: number,
      imagen: string
    }
  ] = [
      {
        nombre: "MPS2222A",
        beta: 240,
        imagen: 'assets/mps2222a.jpg'
      },
      {
        nombre: "TIP41C",
        beta: 143,
        imagen: 'assets/TIP41C.jpg'
      }
    ]
  Selec: string = '';
  transistorSelec: any;


  //datos a encontrar
  IbQ!: number;
  IcQ !: number;
  IeQ !: number;
  VCEQ!: number;
  VRC!: number;
  VRE!: number;
  VC!: number;
  VE!: number;
  VB!: number;
  VBE = 0.7;
  VTH!: number;
  RTH!: number;


  calcular(): void {
    this.calculado = true;
    console.log(this.r1)
    console.log(this.r2)
    console.log(this.rc)
    console.log(this.re)
    console.log(this.vcc)
    // this.transistorSelec = this.transistores[parseInt(this.Selec, 10)];
    this.transistorSelec = {
      nombre: "PRUEBA",
      beta: 80,
      imagen: 'assets/mps2222a.jpg'
    }
    console.log(this.transistorSelec)
    console.log(this.Selec)




    //Encontramos voltaje y resistencia VTH
    this.VTH = (this.vcc * this.r2) / (this.r1 + this.r2);
    this.RTH = (this.r1 * this.r2) / (this.r1 + this.r2);

    //corriente ib
    this.IbQ = (this.VTH - this.VBE) / (this.RTH + (this.transistorSelec.beta + 1) * this.re);


    this.IcQ = this.transistorSelec.beta * this.IbQ;

    this.IeQ = this.IcQ + this.IbQ;

    this.VRC = this.rc * this.IcQ;
    this.VRE = this.re * this.IeQ;

    this.VCEQ = this.vcc - this.VRC - this.VRE;

    this.VC = this.VCEQ + this.VRE;

    this.VE = this.VRE;

    this.VB = this.VE + this.VBE;


    console.log(this.VTH);
    console.log(this.RTH);
    console.log(this.IbQ);
    console.log(this.IcQ);
    console.log(this.IeQ);
    console.log(this.VCEQ);
    console.log(this.VC);
    console.log(this.VB);
    console.log(this.VE);


    if ((this.transistorSelec.beta * this.re) >= (10 * this.r2)) {
      console.log("METODO APROXIMACION");
      this.metodoAproximacion();
    }

  }

  metodoAproximacion(): void {
    this.VTH = (this.vcc * this.r2) / (this.r1 + this.r2);
    this.RTH = (this.r1 * this.r2) / (this.r1 + this.r2);

    this.VB = this.VTH;

    this.VE = this.VB - this.VBE;
    this.IeQ = this.VE / this.re;

    this.IcQ = this.IeQ;

    this.VRC = this.IcQ * this.rc
    this.VCEQ = this.vcc - this.VRC - this.VE;
    this.VC = this.VCEQ + this.VE;

    this.IbQ = this.IcQ / this.transistorSelec.beta;



    console.log(this.IbQ);
    console.log(this.IcQ);
    console.log(this.IeQ);
    console.log(this.VCEQ);
    console.log(this.VC);
    console.log(this.VB);
    console.log(this.VE);
  }
}
