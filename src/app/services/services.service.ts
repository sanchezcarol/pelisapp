import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apikey: string = "c2447574823e45e58f17d1188a7f53d8"
  private urlMoviedb: string = "https://api.themoviedb.org/3"
  peliculas:any[] = []

  constructor(private jsonp: HttpClientJsonpModule, private http: HttpClient) { }

  getCartelera() {

    let desde = new Date()
    let hasta = new Date()

    hasta.setDate(hasta.getDate() + 7)

    let desdeStr = desde.getFullYear() + "-" + ("0" + (desde.getMonth() + 1)).slice(-2) + "-" + ("0" + desde.getDate()).slice(-2)
    let hastaStr = desde.getFullYear() + "-" + ("0" + (hasta.getMonth() + 1)).slice(-2) + "-" + ("0" + hasta.getDate()).slice(-2)

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`

    return this.http.jsonp(url, 'callback').pipe(
      map((resp: any) => {
        return resp
      }))
  }

  getInfantiles(){
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`

    return this.http.jsonp(url, 'callback').pipe(
      map((resp: any) => {
        return resp
      }))
  }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc?&api_key=${this.apikey}&language=es`
    return this.http.jsonp(url, 'callback').pipe(
      map((resp: any) => {
        return resp
      }))
  }

  buscarPelicula(text: string) {
    console.log('el texto',text);
    
    let url = `${this.urlMoviedb}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`
    return this.http.jsonp(url, 'callback').pipe(
      map((resp: any) => {

        this.peliculas = resp.results 
        console.log(this.peliculas);
        
        return resp.results
      }))

  }
}
