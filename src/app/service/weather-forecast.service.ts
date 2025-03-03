import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
  
export interface DailyForecast{
  day:string,
  tempMin:number,
  tempMax:number, //dati che cambiano ogni giorno
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
}
