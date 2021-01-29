import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar: string = ""

  constructor(private router: ActivatedRoute, public peliService: ServicesService) {
    this.router.params.subscribe(params => {
      if (params['text'])
        this.peliService.buscarPelicula(params['text']).subscribe()
    })
  }

  ngOnInit(): void {
  }

  buscarPelicula() {

    if (this.buscar.length == 0) return
    this.peliService.buscarPelicula(this.buscar).subscribe()
  }

}
