import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  readonly baseUrl = 'https://y1tomtyldh.execute-api.us-east-1.amazonaws.com/analisis/pasto';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAnalysis(): Observable<AnalysisChart[]> {
    return this.httpClient.get<AnalysisChart[]>(this.baseUrl);
  }
}
