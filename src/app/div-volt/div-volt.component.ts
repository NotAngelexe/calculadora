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
  ICSat: number = 0;
  calculado = false;
  aproximacion = false;
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
    },
    {
      nombre: string,
      beta: number,
      imagen: string
    },
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
      },
      {
        nombre: "PRUEBA",
        beta: 110,
        imagen: 'assets/mps2222a.jpg'
      }
    ]
  Selec: string = '';
  transistorSelec: any;


  //datos a encontrar
  IbQ: number = 0;
  IcQ: number = 0;
  IeQ: number = 0;
  VCEQ: number = 0;
  VRC: number = 0;
  VRE: number = 0;
  VC: number = 0;
  VE: number = 0;
  VB: number = 0;
  VBE = 0.7;
  VTH: number = 0;
  RTH: number = 0;


  IbQAprox: number = 0;
  IcQAprox: number = 0;
  IeQAprox: number = 0;
  VCEQAprox: number = 0;
  VRCAprox: number = 0;
  VREAprox: number = 0;
  VCAprox: number = 0;
  VEAprox: number = 0;
  VBAprox: number = 0;

  calcular(): void {
    this.calculado = true;
    console.log(this.r1)
    console.log(this.r2)
    console.log(this.rc)
    console.log(this.re)
    console.log(this.vcc)
    console.log(this.VE)
    console.log(this.VB)
    
    this.transistorSelec = this.transistores[parseInt(this.Selec, 10)];
    
    console.log(this.transistorSelec)
    console.log(this.Selec)

     if (this.r1 == 0 && this.r2 == 0 && this.rc == 0 && this.re == 0) {
      this.IeQ=this.IcQ;
      this.re=this.VE/this.IcQ;
      this.VRC=this.vcc-this.VCEQ-this.VE;
      this.VC = this.VCEQ + this.VRE;
      this.rc=this.VRC/this.IcQ;
      this.VB=this.VE+this.VBE;
      this.r2=(this.transistorSelec.beta*this.re)/10;
      this.r1=((this.vcc*this.r2)/this.VB)-this.r2;
      this.IbQ=this.IcQ/this.transistorSelec.beta;
      this.ICSat = this.vcc / (this.rc + this.re);

    } else {
      this.ICSat = this.vcc / (this.rc + this.re);
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
        this.aproximacion = true;
        this.metodoAproximacion();
      }
    }
  }

  metodoAproximacion(): void {
    this.VTH = (this.vcc * this.r2) / (this.r1 + this.r2);
    this.RTH = (this.r1 * this.r2) / (this.r1 + this.r2);

    this.VBAprox = this.VTH;

    this.VEAprox = this.VBAprox - this.VBE;
    this.IeQAprox = this.VEAprox / this.re;

    this.IcQAprox = this.IeQAprox;

    this.VRCAprox = this.IcQAprox * this.rc
    this.VCEQAprox = this.vcc - this.VRCAprox - this.VEAprox;
    this.VCAprox = this.VCEQAprox + this.VEAprox;

    this.IbQAprox = this.IcQAprox / this.transistorSelec.beta;



    console.log(this.IbQAprox);
    console.log(this.IcQAprox);
    console.log(this.IeQAprox);
    console.log(this.VCEQAprox);
    console.log(this.VCAprox);
    console.log(this.VBAprox);
    console.log(this.VEAprox);
  }

  limpiarDatos(): void {
    this.r1 = 0;
    this.r2 = 0;
    this.rc = 0;
    this.re = 0;
    this.vcc = 0;
    this.calculado = false;
    this.VTH = 0;
    this.RTH = 0;
    this.IbQ = 0;
    this.IcQ = 0;
    this.IeQ = 0;
    this.VCEQ = 0;
    this.VC = 0;
    this.VB = 0;
    this.VE = 0;
    this.aproximacion = false;
    this.IbQAprox = 0;
    this.IcQAprox = 0;
    this.IeQAprox = 0;
    this.VCEQAprox = 0;
    this.VCAprox = 0;
    this.VBAprox = 0;
    this.VEAprox = 0;
    this.ICSat=0;

  }


}
