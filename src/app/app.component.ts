import { Component } from '@angular/core';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviesAPP';

  constructor(public ps: ServicesService){

    this.ps.getPopulares().subscribe(res => {console.log(res);
    });
  }


}
