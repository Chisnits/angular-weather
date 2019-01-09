import { Component } from '@angular/core';


@Component({
  selector: 'weather-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather App';

  ngOnInit() {
    this.weather-data-service.getWeather().subscribe(res => {
      console.log(res);
      this.data = res;
   });
  }

}
