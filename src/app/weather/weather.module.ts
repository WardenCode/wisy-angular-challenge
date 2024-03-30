import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherChartComponent } from './components/weather-chart/weather-chart.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  declarations: [WeatherChartComponent, WeatherPageComponent],
  imports: [CommonModule, WeatherRoutingModule],
})
export class WeatherModule {}
