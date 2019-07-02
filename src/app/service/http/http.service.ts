import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get(url: string) {
    return this.httpClient.get(url);
  }

  post(url: string, data: any) {
    return this.httpClient.post(url, data);
  }

  put(url: string, data: any = null) {
    return this.httpClient.put(url, data);
  }

  delete(url: string) {
    return this.httpClient.delete(url);
  }
}
