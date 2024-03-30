import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Period } from '../../interfaces/weatherForecastResponse.interface';
import { WeatherService } from '../../services/weather.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'weather-page',
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css',
})
export class WeatherPageComponent implements OnInit {
  public weatherAreaCode: string = '';
  public weatherForecastInfo$!: Observable<Period[]>;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((val) => {
      this.weatherAreaCode = val.get('weatherAreaCode') || '';

      if (this.weatherAreaCode === '') this.router.navigateByUrl('/home');

      this.getWeatherForecastInfo(this.weatherAreaCode);
    });
  }

  getWeatherForecastInfo(weatherAreaCode: string): void {
    this.weatherForecastInfo$ =
      this.weatherService.getWeatherForecast(weatherAreaCode);
  }
}
