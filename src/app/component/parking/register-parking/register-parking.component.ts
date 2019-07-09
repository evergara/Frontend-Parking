import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceParkingService } from '../../../service/service-parking/service-parking.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ListParkingComponent } from '../list-parking/list-parking.component';

@Component({
  selector: 'acme-register-parking',
  templateUrl: './register-parking.component.html',
  styleUrls: ['./register-parking.component.css']
})
export class RegisterParkingComponent implements OnInit {
  @Output()
  getRegister = new EventEmitter<any>();

  public form = {
    vehicleType: '',
    licensePlate: '',
    displacement: 0
  };

  constructor(
    private servicioParking: ServiceParkingService,
    private modalService: NgbModal
  ) {}

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
          this.getRegister.emit();
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

  ngOnInit() {}

  public resetForm(): any {
    this.form = {
      vehicleType: '',
      licensePlate: '',
      displacement: 0
    };
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
