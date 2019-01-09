import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  private _url: string = 'http://api.openweathermap.org/data/2.5/forecast/sandy?APPID=';
  private _key: string = '8a22a16e9c88b36888875591e135bd0d';

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get(`${this._url}${this._key}`);
  }
}
