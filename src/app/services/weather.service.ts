import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 

  constructor(public http : HttpClient) { 
    console.log('Hello WeatherService');
  }

  getWeather(city,country) {
    return this.http
    .get("https://api.openweathermap.org/data/2.5/weather?q="+city+","+country+
    "&units=metric&appid=1196162af2b5e0da9e1ab24c7faa928f");
  }




}
