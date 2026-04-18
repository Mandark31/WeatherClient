import { Component, OnInit } from '@angular/core';
import { Weather } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  weatherData: Weather[] = [];

  constructor(private weatherService: WeatherService) {}
  title = 'WeatherClient';

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
      }
    });
  }
}
