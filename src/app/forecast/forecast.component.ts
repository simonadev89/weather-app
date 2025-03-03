import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DailyForecast, WeatherForecastService, HourlyForecast } from '../service/weather-forecast.service';
import { formatDate, formatTime, kelvinToCelsius } from '../utils/weather-utils'
import { DailySummaryComponent } from "../daily-summary/daily-summary.component";

@Component({
  selector: 'app-forecast',
  imports: [ReactiveFormsModule, CommonModule, DailySummaryComponent],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {

  FormForecast!: FormGroup;
  currentCityName: string = '';
  currentCityCountry: string = '';
  dailyForecasts: DailyForecast[] = [];
  
  
  constructor(private weatherForecastService: WeatherForecastService) { }
  

  ngOnInit(): void {
    this.FormForecast= new FormGroup({
      city: new FormControl('', [Validators.required, Validators.minLength(3)])
    }) 
  }

  
    searchCityForecast(city:string){
      this.weatherForecastService.getWeatherForecast(city).subscribe((data: any) => {
        console.log(data);
      
        this.currentCityName = data.city.name; 
        this.currentCityCountry = data.city.country
        //creo una mappa con le chiavi giornaliere string è il gg l'array di HourlyForecast lista delle previsioni orarie
        const mapByDay = new Map<string, HourlyForecast[]>(); 

        data.list.forEach((item: any) => {
        const date = formatDate(item.dt);
        const time = formatTime(item.dt);
        

        const hourlyForecast: HourlyForecast = {
          time: time,
          temp: kelvinToCelsius(item.main.temp),
          feelsLike: kelvinToCelsius(item.main.feels_like),
          umidity: item.main.humidity,
          PoP: item.pop,
          main: item.weather[0].main,
          mainCondition: item.weather[0].description,
          clouds: item.clouds.all,
          icon: item.weather[0].icon,
          iconUrl: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
          
          windSpeed: item.wind.speed * 3.6,
        };

        if (!mapByDay.has(date)) {
          mapByDay.set(date, []);
      }

      mapByDay.get(date)?.push(hourlyForecast);
  });

  this.dailyForecasts = Array.from(mapByDay.entries()).map(([day, hourlyForecasts]) => {
    return{
        day: day, 
        tempMin: Math.min(...hourlyForecasts.map(forecast => forecast.temp)),
        tempMax: Math.max(...hourlyForecasts.map(forecast => forecast.temp)),
        hourly: hourlyForecasts
    };
  });
  

  console.log("Daily forecasts:", this.dailyForecasts);

  this.FormForecast.reset(); 
    
  },

  error => {
    console.log(error);
    alert("City not found");
    window.location.href = '/not-found'; 
  }
);
}}