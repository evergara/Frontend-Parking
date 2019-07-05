import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServiceParkingService } from '../../service/service-parking/service-parking.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'acme-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  public listParking: any;
  public searchLicensePlate: string;
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
    if (this.validarDatos()) {
      Swal.fire({
        title: 'Error!',
        text: 'Hay campos nulos',
        type: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else {
      this.servicioParking.saveRegister(this.form).subscribe(
        (response: any) => {
          this.resetForm();
          this.getRegister();
        },
        err => {
          Swal.fire({
            title: 'Error!',
            text: err.error.message,
            type: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      );
    }
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

  public validarDatos(): boolean {
    let existe: boolean;
    for (const key in this.form) {
      if (this.form[key] === null || this.form[key] === '') {
        existe = true;
      }
    }
    return existe;
  }

}
