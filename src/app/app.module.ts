import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BarParkingModule } from './component/bar-parking/bar-parking.module';
import { ParkingModule } from './component/parking/parking.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    BarParkingModule,
    ParkingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
