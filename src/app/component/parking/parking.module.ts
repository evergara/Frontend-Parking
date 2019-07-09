import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingRoutingModule } from './parking-routing.module';
import { ParkingComponent } from './parking.component';
import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { ListParkingComponent } from './list-parking/list-parking.component';

@NgModule({
  declarations: [ParkingComponent, ListParkingComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgPipesModule,
    ParkingRoutingModule
  ],
  exports: [ParkingComponent]
})
export class ParkingModule { }
