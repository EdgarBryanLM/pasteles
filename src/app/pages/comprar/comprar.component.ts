import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {


  alerta:boolean=false;
  constructor(private primengConfig: PrimeNGConfig,private router:Router) { }
  
  ngOnInit(): void {
    this.primengConfig.ripple = true;

  }


  onClick(){
    this.alerta=true;
    setTimeout(() =>{

      this.router.navigateByUrl('/pasteles');
    } ,5000);
    
  }
}
