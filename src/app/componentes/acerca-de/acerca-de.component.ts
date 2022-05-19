import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  nombre: string =''
  
  
  
  constructor() { }
  

  ngOnInit(): void {
  }

}
