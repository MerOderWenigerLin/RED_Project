import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-row',
  templateUrl: './weather-row.component.html',
  styleUrls: ['./weather-row.component.scss']
})
export class WeatherRowComponent implements OnInit {

  @Input() title1 = '';
  @Input() value1 = '';
  @Input() title2 = '';
  @Input() value2 = '';

  constructor() {
  }

  ngOnInit() {
  }

}
