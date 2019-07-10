import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ServiceParkingService } from '../parking/shared/service/service-parking/service-parking.service';

@Component({
  selector: 'acme-bar-parking',
  templateUrl: './bar-parking.component.html',
  styleUrls: ['./bar-parking.component.css']
})
export class BarParkingComponent implements OnInit {
  closeResult: string;

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
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {}

  saveRegister() {
    this.servicioParking
      .saveRegister(this.form)
      .subscribe((response: any) => {});
  }
}
