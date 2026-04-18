import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://weatherapicloud-hpfja9hgc7b3d7bt.southindia-01.azurewebsites.net/weatherforecast';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.apiUrl);
  }
}
