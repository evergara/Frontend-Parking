import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingComponent } from './parking.component';
import { ListParkingComponent } from './list-parking/list-parking.component';

const routes: Routes = [
  {
    path: 'Home',
    component: ParkingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingRoutingModule {}
