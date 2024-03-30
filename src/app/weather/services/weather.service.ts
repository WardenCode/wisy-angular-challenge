import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  Period,
  WeatherForecastResponse,
} from '../interfaces/weatherForecastResponse.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = environment.WEATHER_API;

  constructor(private readonly http: HttpClient) {}

  getWeatherForecast(weatherAreaCode: string): Observable<Period[]> {
    const url = `${this.baseUrl}/${weatherAreaCode}/31,80/forecast`;

    return this.http
      .get<WeatherForecastResponse>(url)
      .pipe(map((response) => response.properties.periods));
  }
}
