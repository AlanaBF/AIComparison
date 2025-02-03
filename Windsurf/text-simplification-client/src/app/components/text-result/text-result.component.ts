import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReadingLevel } from '../../models/text-simplification.model';

@Component({
  selector: 'app-text-result',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <mat-card class="result-card" [class]="'level-' + readingLevel?.toLowerCase()">
      <mat-card-header>
        <mat-card-title>
          <mat-icon class="result-icon">{{ getResultIcon() }}</mat-icon>
          {{ getResultTitle() }}
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p class="result-text">{{ simplifiedText }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .result-card {
      margin-top: 24px;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
      }
    }

    .level-child {
      background: linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%);
      .result-icon { color: #FF6B6B; }
    }

    .level-teen {
      background: linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%);
      .result-icon { color: #5B86E5; }
    }

    .level-adult {
      background: linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%);
      .result-icon { color: #6A11CB; }
    }

    .level-expert {
      background: linear-gradient(135deg, #5EE7DF 0%, #B490CA 100%);
      .result-icon { color: #30475E; }
    }

    mat-card-header {
      margin-bottom: 16px;
    }

    mat-card-title {
      display: flex;
      align-items: center;
      color: #2c3e50;
      font-size: 1.3rem;
      margin-bottom: 8px;
    }

    .result-icon {
      margin-right: 8px;
      font-size: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
    }

    .result-text {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #2c3e50;
      margin: 0;
      padding: 16px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }
  `]
})
export class TextResultComponent {
  @Input() simplifiedText: string = '';
  @Input() readingLevel: ReadingLevel | null = null;

  getResultIcon(): string {
    switch (this.readingLevel) {
      case ReadingLevel.Child:
        return 'child_care';
      case ReadingLevel.Teen:
        return 'school';
      case ReadingLevel.Adult:
        return 'person';
      case ReadingLevel.Expert:
        return 'psychology';
      default:
        return 'auto_awesome';
    }
  }

  getResultTitle(): string {
    switch (this.readingLevel) {
      case ReadingLevel.Child:
        return '🌟 Kid-Friendly Version';
      case ReadingLevel.Teen:
        return '🎓 Teen-Friendly Version';
      case ReadingLevel.Adult:
        return '👥 General Version';
      case ReadingLevel.Expert:
        return '🔬 Expert Version';
      default:
        return 'Simplified Text';
    }
  }
}
