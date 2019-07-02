import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceParkingService {
  private URL: string;
  private PORT: number;
  private RequestMapping: string;
  private API: string;

  constructor(private http: HttpService) {
    this.URL = 'http://localhost';
    this.PORT = 8080;
    this.RequestMapping = 'Parking';
    this.API = `${this.URL}:${this.PORT}/${this.RequestMapping}/`;
  }

  getRegister() {
    return this.http.get(this.API);
  }

  saveRegister(data: any) {
    return this.http.post(this.API, data);
  }

  updateRegister(placa: string) {
    return this.http.put(this.API + placa);
  }
}
