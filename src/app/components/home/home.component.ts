import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  cartelera: any
  infantiles:any
  populares:any

  constructor(private pelis: ServicesService) {
    
    this.pelis.getCartelera()
    .subscribe(res => { 
      this.cartelera = res.results       
    })

    this.pelis.getInfantiles()
    .subscribe(res => { 
      this.infantiles = res.results       
    })

    this.pelis.getPopulares()
    .subscribe(res => { 
      this.populares = res.results       
    })

  }

  ngOnInit(): void {
    
    
        
  }



}
