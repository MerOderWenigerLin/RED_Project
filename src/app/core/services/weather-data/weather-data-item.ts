export class WeatherDataItem {
  date: string;
  time: string;
  tempA: string;
  temp3: string;
  humidityA: string;
  airPressure: string;
  rain: string;
  wind: string;
  direction: string;
  brightness: string;

  constructor(any: any) {
    this.date = any['Datum'];
    this.time = any['Zeit'];
    this.tempA = any['Temp. A.'];
    this.temp3 = any['Temp. 3'];
    this.humidityA = any['Feuchte A.'];
    this.airPressure = any['Luftdruck'];
    this.rain = any['Regen'];
    this.wind = any['Wind'];
    this.direction = any['Richtung'];
    this.brightness = any['Helligkeit'];
  }

}
