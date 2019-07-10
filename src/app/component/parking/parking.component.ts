import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ListParkingComponent } from './list-parking/list-parking.component';
@Component({
  selector: 'acme-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  @ViewChild(ListParkingComponent, { static: true })
  list: ListParkingComponent;
  public searchLicensePlate: string;

  constructor() {}

  ngOnInit() {
    this.getRegister();
  }

  public getRegister(): void {
    this.list.getRegister();
  }
}
