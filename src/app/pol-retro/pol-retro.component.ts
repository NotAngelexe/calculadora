import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Console } from 'console';

@Component({
  selector: 'app-pol-retro',
  templateUrl: './pol-retro.component.html',
  styleUrls: ['./pol-retro.component.css']
})
export class PolRetroComponent implements OnInit {

  // variables que recuperan del formm
  resistencias: any = {
    RB: null,
    RC: null,
    RE: null,
    Beta: null,
    vcc: null
  };

  // variables locales
  Rb: number = 0;
  Rc: number = 0;
  Re: number = 0;
  beta: number = 0;
  vcc: number = 0;
  tran: number=0;
  //corrientes y variables necesarias
  vbe: number = 0.7;

  Ib: number = 0;
  Ic: number = 0;
  Ie: number = 0;

  Vrc: number = 0;
  Vrb: number = 0;
  Vre: number = 0;

  Vc: number = 0;
  Vb: number = 0;
  Ve: number = 0;
  Vce: number = 0;

  aux: number = 0;
  aux2: number = 0;
  sum: number=0;

  constructor() {
  }

  ngOnInit(): void {
  }

  calcula(form: NgForm) {
    console.log("EnviandoDatos...");
    console.log(form.value)

    this.Rb = form.value.RB;
    this.Rc = form.value.RC;
    this.Re = form.value.RE;
    this.vcc = form.value.VCC;
    this.beta = form.value.Beta;
    this.tran= form.value.select;

    this.Rb=this.Rb*1000;
    this.Rc=this.Rc*1000;
    this.Re=this.Re*1000;

    console.log(this.Rc);
    console.log(this.beta);
    console.log(this.vcc);
    console.log(this.tran);

    if (console.log(this.Rb) === null) {
      console.log("No envia nada :/")
    } else {
      console.log("Ya envia datos");
    }

    
    //calculando IB
    if(this.beta===null || this.beta===0){
      this.aux = this.vcc-0.7;
      console.log(this.aux)
      this.aux2=(this.Rb+((121)*(this.Re+this.Rc)))/1000;
      console.log(this.aux2);
      this.Ib=(this.aux/this.aux2);
      console.log("Corriente b", this.Ib);
      //calculando IC
      this.Ic=(121*this.Ib);
      console.log("Corriente C", this.Ic);
    }else{
      this.aux = this.vcc-this.vbe;
      this.aux2=this.Rb*(this.beta+1)*(this.Re+this.Rc);
      this.Ib=this.aux/this.aux2;
      console.log("Corriente b", this.Ib);
      //calculando IC
      this.Ic=(this.beta)*(this.Ib);
      console.log("Corriente C", this.Ic);
    }
    //Calculado VB
    this.Vb=(this.Ib)*(this.Rb);
    console.log("Voltaje en b", this.Vb);
    //Calculando VRC
    this.Vrc=(this.Ic)*(this.Rc);
    console.log("voltaje rc", this.Vrc)
    console.log("Voltaje en c", this.Vrc);
    //Calculando IE
    this.Ie=this.Ib+this.Ic;
    console.log("Corriente en e", this.Ie);
    //calculando vce
    this.Vce= this.vcc-this.Vrc;
    console.log("Voltaje vce",this.Vce)
  }
  
}