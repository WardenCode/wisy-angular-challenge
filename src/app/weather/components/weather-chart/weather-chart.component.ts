import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Period } from '../../interfaces/weatherForecastResponse.interface';

Chart.register(...registerables);

@Component({
  selector: 'weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrl: './weather-chart.component.css',
})
export class WeatherChartComponent implements OnInit, OnDestroy {
  @Input()
  public periods!: Period[];
  private chartRef!: Chart;

  ngOnInit(): void {
    if (!this.periods) throw new Error('Data prop is required');

    this.renderChart();
  }

  ngOnDestroy(): void {
    this.chartRef.destroy();
  }

  renderChart() {
    const labels: string[] = this.periods.map((period) => period.name);
    const data: number[] = this.periods.map((period) => period.temperature);

    this.chartRef = new Chart('piechart', {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Temperature (F°)',
            data,
            borderWidth: 2,
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        transitions: {
          show: {
            animations: {
              x: {
                from: 0,
              },
              y: {
                from: 0,
              },
            },
          },
          hide: {
            animations: {
              x: {
                to: 0,
              },
              y: {
                to: 0,
              },
            },
          },
        },
      },
    });
  }
}
