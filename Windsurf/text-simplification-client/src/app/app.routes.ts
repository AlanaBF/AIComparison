import { Routes } from '@angular/router';
import { TextInputComponent } from './components/text-input/text-input.component';

export const routes: Routes = [
  { path: '', component: TextInputComponent },
  { path: '**', redirectTo: '' }
];
