import { RouterModule, Routes } from "@angular/router";
import { BuscarComponent } from "./components/buscar/buscar.component";
import { HomeComponent } from "./components/home/home.component";
import { InfoComponent } from "./components/info/info.component";



const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: BuscarComponent},  
    {path: 'search/:text', component: BuscarComponent},  
    {path: 'info/:id/:pag', component: InfoComponent}, 
    {path: 'info/:id/:pag/:text', component: InfoComponent},   
    {path:'**', pathMatch:'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);