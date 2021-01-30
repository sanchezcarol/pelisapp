import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  cartelera: any
  infantiles:any
  populares:any

  constructor(private pelis: ServicesService,private router:Router) {
    
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

  buscarPelicula(texto:string){

    if(texto.length==0) return

    this.router.navigate(['search',texto])
  }



}
