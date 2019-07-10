import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceParkingService } from '../shared/service/service-parking/service-parking.service';

@Component({
  selector: 'acme-list-parking',
  templateUrl: './list-parking.component.html',
  styleUrls: ['./list-parking.component.css']
})
export class ListParkingComponent implements OnInit {
  public listParking: any;
  constructor(private servicioParking: ServiceParkingService) {}

  @Input()
  public searchLicensePlate: string;

  ngOnInit() {}

  getRegister() {
    this.servicioParking.getRegister().subscribe((response: any) => {
      this.listParking = response;
    });
  }

  public registerVehicle(placa: string): any {
    this.servicioParking.updateRegister(placa).subscribe(
      (response: any) => {
        this.getRegister();
      },
      err => {
        Swal.fire({
          title: 'Error!',
          text: err.message,
          type: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }
}
