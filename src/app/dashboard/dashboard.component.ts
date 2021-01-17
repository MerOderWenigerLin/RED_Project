import {Component, OnInit} from '@angular/core';
import {WeatherData} from '../core/services/weather-data/weather-data';
import {WeatherDataItem} from '../core/services/weather-data/weather-data-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  weatherPageSize = 5;
  weatherData: WeatherDataItem[] = [];

  constructor() {
  }

  ngOnInit() {
    const data = WeatherData.map(it => new WeatherDataItem(it));

    for (let i = 0; i < this.weatherPageSize; i++) {
      const index = this.getRandomInt(data.length - 1);
      this.weatherData.push(data[index]);
      data.splice(index, 1);
    }
    console.log(this.weatherData);
  }

  getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
