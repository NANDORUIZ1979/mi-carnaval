import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenAiChatService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.key_openapi}`
    });

    const payload = {
      model: 'gpt-4o-mini', // Cambia según el modelo que prefieras
      messages: [{ role: 'user', content: message }],
      max_tokens: 150
    };

    return this.http.post(this.apiUrl, payload, { headers });
  }
}
