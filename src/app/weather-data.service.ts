import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  private _url = 'http://api.openweathermap.org/data/2.5/forecast?';
  private _location = 'q=Sandy,US';
  private _key = 'APPID=8a22a16e9c88b36888875591e135bd0d';

  constructor(private http: HttpClient) { }

  getWeather(){
    return this.http.get<Weather[]>(`${this._url}${this._location}&${this._key}`);
  }
}
