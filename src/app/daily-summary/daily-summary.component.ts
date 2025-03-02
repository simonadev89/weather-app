import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DailyForecast } from '../service/weather-forecast.service';

@Component({
  selector: 'app-daily-summary',
  imports: [CommonModule,],
  templateUrl: './daily-summary.component.html',
  styleUrl: './daily-summary.component.css'
})
export class DailySummaryComponent {
@Input() daily!: DailyForecast;
@Input() cityName!: string;

showDetails = false;

toggleDetails() {
  this.showDetails = !this.showDetails;
}

getMostFrequentIcon(): string | null {
  const counts: Record<string, number> = {};
  let mostFrequentIcon: string | null = null;
  let maxCount = 0;

  for (const hour of this.daily.hourly) {
    const icon = hour.icon; 

    counts[icon] = (counts[icon] || 0) + 1;
    if (counts[icon] > maxCount) {
      maxCount = counts[icon];
      mostFrequentIcon = icon;
    }
  }

  return mostFrequentIcon;
}

getIconUrl(): string {
  const icon = this.getMostFrequentIcon();
  return icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : '';
}}
