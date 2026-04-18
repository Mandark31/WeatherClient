import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get(
      'https://weatherapicloud-hpfja9hgc7b3d7bt.southindia-01.azurewebsites.net/weatherforecast'
    );
  }
}
