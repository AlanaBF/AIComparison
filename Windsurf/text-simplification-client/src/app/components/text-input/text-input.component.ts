import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TextSimplificationService } from '../../services/text-simplification.service';
import { ReadingLevel, TextSimplificationResponse } from '../../models/text-simplification.model';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { TextResultComponent } from '../text-result/text-result.component';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    LoadingSpinnerComponent,
    TextResultComponent
  ],
  template: `
    <div class="container">
      <mat-card class="input-card">
        <mat-card-header>
          <mat-card-title>
            <mat-icon class="title-icon">auto_awesome</mat-icon>
            Transform Your Text
          </mat-card-title>
          <mat-card-subtitle>
            Choose your audience and watch the magic happen! 
          </mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>
              <mat-icon>edit</mat-icon>
              Enter your text here
            </mat-label>
            <textarea
              matInput
              [(ngModel)]="inputText"
              rows="6"
              placeholder="Paste your complex text here, and we'll make it crystal clear! "
            ></textarea>
          </mat-form-field>

          <mat-form-field appearance="outline" class="full-width">
            <mat-label>
              <mat-icon>people</mat-icon>
              Select Your Audience
            </mat-label>
            <mat-select [(ngModel)]="selectedLevel">
              <mat-option [value]="ReadingLevel.Child">
                Child (Age 8-12)
              </mat-option>
              <mat-option [value]="ReadingLevel.Teen">
                Teen (Age 13-17)
              </mat-option>
              <mat-option [value]="ReadingLevel.Adult">
                General Adult
              </mat-option>
              <mat-option [value]="ReadingLevel.Expert">
                Expert
              </mat-option>
            </mat-select>
          </mat-form-field>
        </mat-card-content>
        <mat-card-actions>
          <button
            mat-raised-button
            class="transform-button"
            (click)="simplifyText()"
            [disabled]="!inputText || !selectedLevel || isLoading"
          >
            <mat-icon>auto_fix_high</mat-icon>
            Transform Text
          </button>
        </mat-card-actions>
      </mat-card>

      <app-loading-spinner
        [isLoading]="isLoading"
        loadingText="Working some magic... "
      ></app-loading-spinner>

      <app-text-result
        *ngIf="result"
        [simplifiedText]="result.simplifiedText"
        [readingLevel]="result.level"
      ></app-text-result>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    .input-card {
      margin-bottom: 20px;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      background: white;
    }

    .title-icon {
      margin-right: 8px;
      color: #6a11cb;
    }

    mat-card-title {
      display: flex;
      align-items: center;
      color: #2575fc;
      font-size: 1.5rem;
      margin-bottom: 8px;
    }

    mat-card-subtitle {
      color: #666;
      font-size: 1.1rem;
    }

    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }

    mat-form-field {
      ::ng-deep .mat-form-field-wrapper {
        padding-bottom: 0;
      }
    }

    textarea {
      font-size: 1.1rem;
      line-height: 1.6;
    }

    mat-card-actions {
      padding: 16px;
      display: flex;
      justify-content: center;
    }

    .transform-button {
      background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
      color: white;
      font-size: 1.1rem;
      padding: 8px 24px;
      border-radius: 24px;
      transition: all 0.3s ease;

      &:hover:not([disabled]) {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(37, 117, 252, 0.4);
      }

      &[disabled] {
        opacity: 0.7;
      }

      mat-icon {
        margin-right: 8px;
      }
    }
  `]
})
export class TextInputComponent implements OnInit {
  inputText = '';
  selectedLevel: ReadingLevel | null = null;
  ReadingLevel = ReadingLevel;
  isLoading = false;
  result: TextSimplificationResponse | null = null;

  constructor(private textSimplificationService: TextSimplificationService) {}

  ngOnInit(): void {}

  simplifyText(): void {
    if (!this.inputText || !this.selectedLevel) return;

    this.isLoading = true;
    this.result = null;

    this.textSimplificationService
      .simplifyText({
        text: this.inputText,
        level: this.selectedLevel
      })
      .subscribe({
        next: (response) => {
          this.result = response;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error simplifying text:', error);
          this.isLoading = false;
          // TODO: Add error handling/display
        }
      });
  }
}
