import { Injectable } from '@angular/core';
import { HttpService } from '../httpParking/httpParking.service';
import { environment } from '../../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceParkingService {
  private API: string;

  constructor(private http: HttpService) {
    this.API = environment.apiUrl;
  }

  getRegister() {
    return this.http.get(this.API);
  }

  saveRegister(data: any) {
    return this.http.post(this.API, data);
  }

  updateRegister(placa: string) {
    return this.http.put(`${this.API}/${placa}`);
  }
}
