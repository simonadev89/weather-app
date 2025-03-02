import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';


export interface CityWeatherForecast {
  cityInfo: CityInfo;
  dailyForecasts: DailyForecast[];
}


export interface CityInfo  {
  cityName: string,             //dati che non cambiano mai
}
  
export interface DailyForecast{
  day:string,
  sunrise: string,
  sunset: string,          //dati che cambiano ogni giorno
  tempMin:number,
  tempMax:number,
  hourly: HourlyForecast[]
}

export interface HourlyForecast {
  time:string,
  temp:number,
  feelsLike: number,          //dati che cambiano ogni ora
  umidity:number,
  PoP:number,
  main:string,
  mainCondition:string,
  clouds:number,
  icon:string,
  iconUrl: string; 
  windSpeed:number
}

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  private _apiKey= environment.apiKey;
  private _apiUrl= environment.apiUrl

  constructor(private http: HttpClient) { }


  getWeatherForecast(city:string){
    return this.http.get(`${this._apiUrl}forecast?q=${city}&appid=${this._apiKey}`);
  }

  saveLastForecastCity(city: string) {
    localStorage.setItem('lastCityForecast', city);
  }

  getLastForecastCity(): string | null {
  return localStorage.getItem('lastCityForecast');
  }
}
