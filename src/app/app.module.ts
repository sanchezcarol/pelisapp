import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ServicesService } from './services/services.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { APP_ROUTING } from './app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { FormsModule } from '@angular/forms';
import { GaleriaComponent } from './components/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    NavbarComponent,
    HomeComponent,
    InfoComponent,
    BuscarComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [ ServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
