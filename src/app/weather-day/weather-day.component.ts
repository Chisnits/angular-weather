import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'weather-weather-day',
  templateUrl: './weather-day.component.html',
  styleUrls: ['./weather-day.component.scss']
})
export class WeatherDayComponent implements OnInit {

  constructor(private weatherService: WeatherDataService) { }

  public weather = [];
  public test;
  ngOnInit(): void {
    this.weatherService.getWeather()
    .subscribe(data => this.weather = data);
    console.log(this.weather);
  }

}
