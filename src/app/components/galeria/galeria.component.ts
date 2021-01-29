import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [
  ]
})
export class GaleriaComponent implements OnInit {

  @Input('peliculas') pelicula;
  @Input('titulo') titulo;
  constructor() { }

  ngOnInit(): void {
  }

}
