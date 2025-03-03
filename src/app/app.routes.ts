import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'forecast', component: ForecastComponent},
    {path: 'not-found', component: NotFoundComponent },
    {path: '**', component: NotFoundComponent}
];
