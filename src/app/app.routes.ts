import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecastMeteo5gg/forecast.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FavoriteCitiesComponent } from './favorite-cities/favorite-cities.component';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'forecast', component: ForecastComponent},
    {path: 'favoritecities',component: FavoriteCitiesComponent},
    {path: 'recentsearches', component:RecentSearchesComponent},
    {path: '**', component: NotFoundComponent}
];
