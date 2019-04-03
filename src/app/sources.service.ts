import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SourcesService {

  constructor(private http: HttpClient) { }

  getSource() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=365d9913b4b1430d87ebc9faf1cf850d')
  }
}
