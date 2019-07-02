import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServiceParkingService } from '../../service/service-parking/service-parking.service';

@Component({
  selector: 'acme-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  public listParking: any;
  public form = {
    vehicleType: '',
    licensePlate: '',
    displacement: 0
  };

  constructor(
    private servicioParking: ServiceParkingService,
    private modalService: NgbModal
  ) {}

  getRegister() {
    this.servicioParking.getRegister().subscribe((response: any) => {
      this.listParking = response;
    });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(result => {}, reason => {});
  }

  saveRegister(): void {
    this.servicioParking.saveRegister(this.form).subscribe((response: any) => {
      this.resetForm();
      this.getRegister();
    });
  }

  ngOnInit() {
    this.getRegister();
  }

  public resetForm(): any {
    this.form = {
      vehicleType: '',
      licensePlate: '',
      displacement: 0
    };
  }

  public registerVehicle(placa: string): any {
    this.servicioParking.updateRegister(placa).subscribe((response: any) => {
      this.getRegister();
    });
  }
}
