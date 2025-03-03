import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';


export interface City {
  day: any;
  cityName: string;
  main: string;
  mainCondition: string;
  icon: any;
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  windSpeed: number;
  windDirection: any;
  sunrise: any;
  sunset: any;
  

}




@Injectable({
  providedIn: 'root'
})





export class WeatherService {
  private apiKey= environment.apiKey;
  private apiUrl = environment.apiUrl;

  









  

  constructor(private http: HttpClient) {}

  

  getWeather(city:string){
    return this.http.get(`${this.apiUrl}weather?q=${city}&appid=${this.apiKey}`);
  }
}
