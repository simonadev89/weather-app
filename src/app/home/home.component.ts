import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { City, WeatherService } from '../service/weather.service';
import { WeatherCardComponent } from "../weather-card/weather-card.component";
import { error } from 'node:console';
import { RedirectCommand } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, WeatherCardComponent, FormsModule, ReactiveFormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
public selectedCity!: City; 
public windDirectionChange!: number; 


FormCity!: FormGroup;

constructor(private weatherService:WeatherService){ }


ngOnInit(): void {
  this.FormCity = new FormGroup({
    city: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
}


searchCity(city: string){
    this.weatherService.getWeather(city).subscribe((data: any) => {
      console.log(data);

      const dateOption: Intl.DateTimeFormatOptions = {
        day: "2-digit", 
        month: "long", 
        weekday:"long"
      };
      const date = new Date(data.dt * 1000).toLocaleDateString("en-EN", dateOption); 
      const temp = data.main.temp - 273.15;
      const feelsLike = data.main.feels_like - 273.15;
      const tempMin = data.main.temp_min - 273.15;
      const tempMax = data.main.temp_max - 273.15;
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const windSpeed = data.wind.speed * 3.6;
      const windDirection = data.wind.deg;
      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-EN");
      const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-EN");
      
      const cityData: City = {
        day: date,
        cityName: data.name,
        temp: temp,
        feelsLike: feelsLike,
        tempMin: tempMin,
        tempMax: tempMax,
        main: data.weather[0].main,
        mainCondition: data.weather[0].description,
        icon: iconUrl,
        humidity: data.main.humidity,
        windSpeed: windSpeed,
        windDirection: windDirection,
        sunrise: sunrise,
        sunset: sunset,
      };

      console.log(cityData);
        this.selectedCity = cityData;

        // this.weatherService.saveLastCity(city.CityName);
        this.FormCity.reset();
        
    },

    error => {
      console.log(error);
      alert("City not found");
      window.location.href = '/not-found'; 
    }
    );
  }
}
