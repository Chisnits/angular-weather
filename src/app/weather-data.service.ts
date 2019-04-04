import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
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
    const promise = new Promise((resolve, reject) => {
      return this.http.get(`${this._url}${this._location}&${this._key}`)
    .toPromise()
    .then(
      res => { // Success
        console.log(res);
        resolve();
      }
    );
    });
    return promise;
  }
}
