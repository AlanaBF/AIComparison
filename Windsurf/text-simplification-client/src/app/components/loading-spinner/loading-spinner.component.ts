import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  template: `
    <div class="spinner-container" *ngIf="isLoading">
      <mat-spinner [diameter]="50"></mat-spinner>
      <p class="loading-text">{{ loadingText }}</p>
    </div>
  `,
  styles: [`
    .spinner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .loading-text {
      margin-top: 10px;
      color: #666;
    }
  `]
})
export class LoadingSpinnerComponent {
  @Input() isLoading = false;
  @Input() loadingText = 'Processing...';
}
