import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  template: `
    <mat-toolbar class="header">
      <span>✨ Text Simplification Magic ✨</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
    }
    
    .header {
      background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
      color: white;
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      display: flex;
      justify-content: center;
      padding: 1rem;
      margin-bottom: 2rem;
    }
  `]
})
export class AppComponent {
  title = 'text-simplification-client';
}
