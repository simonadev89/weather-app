import { Component, Input } from '@angular/core';
import { City } from '../service/weather.service';
import { CommonModule } from '@angular/common';
import { WindDirectionComponent } from '../wind-direction/wind-direction.component';

@Component({
  selector: 'app-weather-card',
  imports: [CommonModule, WindDirectionComponent],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent {
@Input() city!: City;



}

