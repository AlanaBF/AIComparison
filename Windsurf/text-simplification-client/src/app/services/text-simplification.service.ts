import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TextSimplificationRequest, TextSimplificationResponse } from '../models/text-simplification.model';

@Injectable({
  providedIn: 'root'
})
export class TextSimplificationService {
  private apiUrl = 'http://localhost:5265/api/TextSimplification';

  constructor(private http: HttpClient) { }

  simplifyText(request: TextSimplificationRequest): Observable<TextSimplificationResponse> {
    return this.http.post<TextSimplificationResponse>(`${this.apiUrl}/simplify`, request);
  }
}
