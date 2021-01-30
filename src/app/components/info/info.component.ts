import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  backTo:string = ""
  text:string = ""
  pelicula:any =""
  
  constructor(private router: ActivatedRoute, public peliService: ServicesService) {
    this.router.params.subscribe(params => {
      
      this.backTo = params.pag
      if(params['text']) this.text = params['text']
      
      this.peliService.getPelicula(params['id']).subscribe(peli => { this.pelicula = peli,  console.log(this.pelicula);  })
    })
  }

  ngOnInit(): void {
  }

}
