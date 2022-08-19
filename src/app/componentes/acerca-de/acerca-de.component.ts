import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
   
   miPorfolio:any;
   constructor(private datosPortfolio:PortfolioService, private router:Router, private tokenService: TokenService) { }
   
   isLogged = false;
   titulo="";
   nombre="";
   
   
   

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    });
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
   
  

  login(){
    this.router.navigate(['/Iniciar-Sesion'])
  }
}
  


