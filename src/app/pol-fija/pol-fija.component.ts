import { Component } from '@angular/core';

@Component({
  selector: 'app-pol-fija',
  templateUrl: './pol-fija.component.html',
  styleUrls: ['./pol-fija.component.css']
})
export class PolFijaComponent {
  Rb: number=0;
  Rc: number=0;
  rbT: number=0;
  rcT: number=0;
  vcc: number=0;

  IbQToma: number = 0;
  IcQToma: number = 0;
  IeQToma: number = 0;
  ICSat: number = 0;
  VCEQToma: number = 0;
  VRCToma: number = 0;
  VCToma: number = 0;
  VEToma: number = 0;
  VBToma: number = 0;


  transistores: [
    {
      nombre: string,
      beta: number,
      maxVCE:number,
      maxIc:number,
      imagen: string
    },
    {
      nombre: string,
      beta: number,
      maxVCE:number,
      maxIc:number,
      imagen: string
    },
    {
      nombre: string,
      beta: number,
      maxVCE:number,
      maxIc:number,
      imagen: string
    },
  ] = [
      {
        nombre: "MPS2222A",
        beta: 240,
        maxVCE:40,
        maxIc:0.6,
        imagen: 'assets/mps2222a.jpg'
      },
      {
        nombre: "TIP41C",
        beta: 143,
        maxVCE:40,
        maxIc:6,
        imagen: 'assets/TIP41C.jpg'
      },
      {
        nombre: "PRUEBA",
        beta: 80,
        maxVCE:40,
        maxIc:0.6,
        imagen: 'assets/mps2222a.jpg'
      }
    ]
  Selec: string = '';
  transistorSelec: any;

  IbQ: number = 0;
  IcQ: number = 0;
  VCEQ: number = 0;
  VRC: number = 0;
  VC: number = 0;
  VE: number = 0;
  VB: number = 0;
  VBE = 0.7;
  IeQ: number=0;
  calculado: boolean= false;
  resultado = false;
  mensaje = false;
  
  resultados(){

    this.calculado=true;

    this.Rb = this.rbT;
    this.Rc = this.rcT;

    this.IbQ = this.IbQToma / 1000000;
    this.IcQ = this.IcQToma;
    this.IeQ = this.IeQToma;
    this.VCEQ = this.VCEQToma;
    this.VC = this.VCToma;
    this.VB = this.VBToma;
    this.VE = this.VEToma;

    this.transistorSelec = this.transistores[parseInt(this.Selec, 10)];
    
    if (this.Rb== 0 && this.Rc==0 ) {
      this.IcQ= this.transistorSelec.beta*this.IbQ;
      this.VRC= this.vcc-this.VC;
      this.Rc= this.VRC/this.IcQ;
      this.ICSat=this.vcc/this.Rc;
      this.VCEQ= this.VC;
      this.VB= this.VBE;
      this.Rb= (this.vcc-this.VBE)/this.IbQ;
      this.IeQ= this.IcQ+this.IbQ;

      if (this.ICSat>this.transistorSelec.maxIc || this.VCEQ> this.transistorSelec.maxVCE) {
        this.resultado=false;
        this.mensaje=true;
        console.log("ENTRE CONDICIONES TRANSISTOR")
      }else{
        this.resultado=true;
      }
      
    } else if (this.Rb==0 && this.vcc==0) {
      if (this.IeQ !=0) {
        this.IcQ=this.IeQ-this.IbQ;
      }
      this.VRC= this.Rc*this.IcQ;
      this.vcc= this.VCEQ+this.VRC;
      this.VC= this.VCEQ;
      this.ICSat=this.vcc/this.Rc;
      if (this.IbQ ==0) {
        this.IbQ= this.IcQ/ this.transistorSelec.beta;
      }
      this.Rb= (this.vcc-this.VBE)/this.IbQ;
      this.VB= this.VBE;
      if (this.ICSat>this.transistorSelec.maxIc || this.VCEQ> this.transistorSelec.maxVCE) {
        this.resultado=false;
        this.mensaje=true;
        console.log("ENTRE CONDICIONES TRANSISTOR")
      }else{
        this.resultado=true;
      }
    } else {
      this.IbQ= (this.vcc-this.VBE)/this.Rb;

      this.IcQ= this.transistorSelec.beta*this.IbQ;
      
      this.IeQ= this.IcQ+this.IbQ;
  
      this.VRC= this.Rc*this.IcQ;
  
      this.VC=  this.vcc-this.VRC;
  
      this.VCEQ= this.VC;
  
      this.VB= this.VBE;
      
      this.ICSat=this.vcc/this.Rc;
      
      if (this.ICSat>this.transistorSelec.maxIc || this.VCEQ> this.transistorSelec.maxVCE) {
        this.resultado=false;
        this.mensaje=true;
        console.log("ENTRE CONDICIONES TRANSISTOR")
      }else{
        this.resultado=true;
      }
      
    }
   
  }

  borrar(){
    this.Rb=0;
   this.Rc=0;
   this.rbT=0;
   this.rcT=0;
   this.vcc=0;
   this.IbQToma= 0;
   this.IcQToma = 0;
   this.IeQToma = 0;
   this.ICSat = 0;
   this.VCEQToma = 0;
   this.VRCToma = 0;
   this.VCToma = 0;
   this.VEToma = 0;
   this.VBToma = 0;
   this.IbQ = 0;
   this.IeQ=0;
    this.calculado =false;

  }


} 
