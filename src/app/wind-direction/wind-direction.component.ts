import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind-direction',
  imports: [CommonModule,],
  templateUrl: './wind-direction.component.html',
  styleUrl: './wind-direction.component.css'
})
export class WindDirectionComponent {
  @Input() windDirection!: number;

  getWindIcon():string {
    if (this.windDirection >= 0 && this.windDirection < 45 || this.windDirection >= 315 && this.windDirection < 360) {
      return 'bi-arrow-90deg-up'; // Nord
    } else if (this.windDirection >= 45 && this.windDirection < 135) {
      return 'bi-arrow-90deg-right'; // Est
    } else if (this.windDirection >= 135 && this.windDirection < 225) {
      return 'bi-arrow-90deg-down'; // Sud
    } else {
      return 'bi-arrow-90deg-left'; // Ovest
    }
  }


  
  }












