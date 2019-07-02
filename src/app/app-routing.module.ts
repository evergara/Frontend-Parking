import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingComponent } from './component/parking/parking.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'Home'
  },
  {
    path: 'Home',
    component: ParkingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
