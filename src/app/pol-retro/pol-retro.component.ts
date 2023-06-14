import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pol-retro',
  templateUrl: './pol-retro.component.html',
  styleUrls: ['./pol-retro.component.css']
})
export class PolRetroComponent implements OnInit {

  resistencias: any = {
    Rb:  null,
    Rc: null,
    Re: null,
    beta: null,
    vcc: null
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  calcula(form: NgForm) {
    console.log("EnviandoDatos...");
    console.log(form);
    console.log(form.value);
  }
}

//   Rb: number=0;
//   Rc: number=0;
//   rbT: number=0;
//   rcT: number=0;
//   vcc: number=0;

//   IbQToma: number = 0;
//   IcQToma: number = 0;
//   IeQToma: number = 0;
//   ICSat: number = 0;
//   VCEQToma: number = 0;
//   VRCToma: number = 0;
//   VCToma: number = 0;
//   VEToma: number = 0;
//   VBToma: number = 0;


//   transistores: [
//     {
//       nombre: string,
//       beta: number,
//       maxVCE:number,
//       maxIc:number,
//       imagen: string
//     },
//     {
//       nombre: string,
//       beta: number,
//       maxVCE:number,
//       maxIc:number,
//       imagen: string
//     },
//   ] = [
//       {
//         nombre: "MPS2222A",
//         beta: 240,
//         maxVCE:40,
//         maxIc:0.6,
//         imagen: 'assets/mps2222a.jpg'
//       },
//       {
//         nombre: "TIP41C",
//         beta: 143,
//         maxVCE:40,
//         maxIc:6,
//         imagen: 'assets/TIP41C.jpg'
//       }
//     ]
// }
